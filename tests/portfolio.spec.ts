import { test as base, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// El script de Vercel Analytics solo existe en Vercel: en local se contesta vacío para no ensuciar la consola.
const test = base.extend<{ problems: string[] }>({
  problems: async ({ page }, use) => {
    const problems: string[] = [];
    await page.route('**/_vercel/**', (route) => route.fulfill({ status: 200, contentType: 'text/javascript', body: '' }));
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') problems.push(`${msg.type()}: ${msg.text()}`);
    });
    page.on('pageerror', (error) => problems.push(`pageerror: ${error.message}`));
    page.on('response', (res) => {
      if (res.status() >= 400 && !res.url().includes('/api/')) problems.push(`${res.status()}: ${res.url()}`);
    });
    await use(problems);
  },
});

const pages = [
  { path: '/', lang: 'es', name: 'Nicolás Mazzilli' },
  { path: '/en/', lang: 'en', name: 'Nicolás Mazzilli' },
] as const;
const widths = [360, 390, 768, 1280, 1440];

// Recorre la página para que carguen las imágenes diferidas y se disparen los ScrollTrigger.
async function walk(page: Page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}

for (const { path, lang } of pages) {
  test.describe(`${path} (${lang})`, () => {
    for (const width of widths) {
      test(`a ${width}px: sin errores, sin scroll horizontal y con captura`, async ({ page, problems }) => {
        await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
        await page.goto(path);
        await expect(page.locator('html')).toHaveAttribute('lang', lang);
        await walk(page);
        await page.waitForLoadState('networkidle');
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, 'scroll horizontal').toBeLessThanOrEqual(0);
        await page.screenshot({ path: `tests/output/capturas/${lang}-${width}.png`, fullPage: true, animations: 'disabled' });
        expect(problems).toEqual([]);
      });
    }

    test('enlaces: anclas existentes, rutas internas que responden y externas seguras', async ({ page, request }) => {
      await page.goto(path);
      const links = await page.locator('a[href]').evaluateAll((els) =>
        els.map((a) => ({ href: a.getAttribute('href') ?? '', target: a.getAttribute('target'), rel: a.getAttribute('rel') ?? '' })),
      );
      expect(links.length).toBeGreaterThan(10);
      for (const link of links) {
        if (link.href.startsWith('#')) {
          await expect(page.locator(link.href), `ancla ${link.href}`).toHaveCount(1);
        } else if (link.href.startsWith('/')) {
          expect((await request.get(link.href)).status(), link.href).toBe(200);
        } else if (link.href.startsWith('http')) {
          expect(link.target).toBe('_blank');
          expect(link.rel).toContain('noopener');
        } else {
          expect(link.href).toMatch(/^mailto:/);
        }
      }
    });

    test('accesibilidad: axe sin violaciones (detalles del panel abiertos)', async ({ page }) => {
      await page.goto(path);
      await walk(page);
      for (const row of await page.locator('button.row-head').all()) await row.click();
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
    });
  });
}

test.describe('SEO', () => {
  test('canonical, hreflang, OG absoluta y JSON-LD Person', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://nicolasmazzilli.vercel.app/en/');
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute('href', 'https://nicolasmazzilli.vercel.app/');
    await expect(page.locator('link[hreflang="x-default"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://nicolasmazzilli.vercel.app/og-en.png');
    const person = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}');
    expect(person['@type']).toBe('Person');
    expect(person.jobTitle).toBe('Junior full-stack developer');
  });

  test('robots, sitemap e imagen OG responden', async ({ request }) => {
    for (const url of ['/robots.txt', '/sitemap-index.xml', '/og.png', '/og-en.png', '/favicon.svg']) {
      expect((await request.get(url)).status(), url).toBe(200);
    }
  });

  test('la 404 responde 404 y lleva a la portada', async ({ page }) => {
    const res = await page.goto('/no-existe');
    expect(res?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Vía equivocada');
    await expect(page.getByRole('link', { name: 'Volver a la portada' })).toHaveAttribute('href', '/');
  });
});

test.describe('Interacciones', () => {
  test('momento firma: las fichas giran por encima y terminan en el nombre', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Nicolás Mazzilli');
    await expect(page.locator('.flap .ov').first()).toBeAttached({ timeout: 3000 });
    await expect(page.locator('.flap .ov')).toHaveCount(0, { timeout: 4000 });
    const letters = await page.locator('.flap').allTextContents();
    expect(letters.join('')).toBe('NICOLÁSMAZZILLI');
  });

  test('NIZZ en escritorio: el móvil fijo cambia de pantalla con cada frase', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    // GSAP no se descarga hasta que la secuencia está cerca de la pantalla.
    await expect(page.locator('[data-story]')).not.toHaveClass(/is-live/);
    const steps = page.locator('.step');
    await steps.nth(0).evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(page.locator('[data-story]')).toHaveClass(/is-live/);
    await steps.nth(1).evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(steps.nth(1)).toHaveClass(/is-active/);
    await expect(page.locator('[data-stage-screens] img').nth(1)).toHaveCSS('opacity', '1');
    await steps.nth(2).evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(steps.nth(2)).toHaveClass(/is-active/);
  });

  test('copiar email: portapapeles, botón y aviso', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/');
    // Se localiza por atributo: el nombre accesible cambia a «Copiado» durante la confirmación.
    const button = page.locator('.hero [data-copy]');
    await button.click();
    await expect(button).toHaveText('Copiado');
    await expect(page.getByRole('status').filter({ hasText: 'Email copiado' })).toBeVisible();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('nicolasmazzilli2004@gmail.com');
    await expect(button).toHaveText('Copiar email', { timeout: 3000 });
  });

  test('panel de salidas: abre el detalle y lo vuelve a cerrar', async ({ page }) => {
    await page.goto('/');
    const row = page.getByRole('button', { name: /Cortly/ });
    const github = page.getByRole('link', { name: 'Cortly en GitHub' });
    await expect(row).toHaveAttribute('aria-expanded', 'false');
    await expect(github).not.toBeInViewport();
    await row.click();
    await expect(row).toHaveAttribute('aria-expanded', 'true');
    await expect(github).toBeVisible();
    await github.focus();
    await expect(github).toBeFocused();
    await row.click();
    await expect(row).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#d-cortly')).toHaveJSProperty('inert', true);
  });

  test('saltar al contenido: primer tabulador y foco en main', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Saltar al contenido' });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press('Enter');
    await expect(page.locator('main#contenido')).toBeFocused();
  });

  test('selector de idioma: enlace real a /en/', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^EN/ }).click();
    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { name: 'Let’s talk' })).toBeAttached();
  });
});

test.describe('Formulario', () => {
  const fill = async (page: Page) => {
    await page.getByLabel('Nombre', { exact: true }).fill('Ana Pérez');
    await page.getByLabel('Email', { exact: true }).fill('ana@empresa.com');
    await page.getByLabel('Empresa (opcional)').fill('Empresa S.L.');
    await page.getByLabel('Mensaje', { exact: true }).fill('Buscamos un desarrollador junior para el equipo.');
  };

  test('inválido: mensajes por campo y foco en el primero', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Email', { exact: true }).fill('ana@');
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    await expect(page.getByText('Escribe tu nombre.')).toBeVisible();
    await expect(page.getByText('A ese email le falta algo. Revísalo.')).toBeVisible();
    await expect(page.getByText('Cuéntame en una frase qué buscas.')).toBeVisible();
    await expect(page.getByLabel('Nombre', { exact: true })).toBeFocused();
    await expect(page.getByLabel('Nombre', { exact: true })).toHaveAttribute('aria-invalid', 'true');
    await page.getByLabel('Nombre', { exact: true }).fill('Ana');
    await expect(page.getByText('Escribe tu nombre.')).toBeHidden();
  });

  test('válido: enviando y enviado', async ({ page }) => {
    let body = '';
    await page.route('**/api/contact', async (route) => {
      body = route.request().postData() ?? '';
      await new Promise((r) => setTimeout(r, 400));
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    });
    await page.goto('/');
    await fill(page);
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    await expect(page.getByRole('button', { name: 'Enviando…' })).toBeDisabled();
    await expect(page.getByText('Mensaje enviado')).toBeVisible();
    await expect(page.locator('[data-form-done]')).toBeFocused();
    expect(body).toContain('ana@empresa.com');
    expect(body).toContain('name="web"');
    await page.getByRole('button', { name: 'Escribir otro' }).click();
    await expect(page.getByLabel('Nombre', { exact: true })).toBeFocused();
    await expect(page.getByLabel('Nombre', { exact: true })).toHaveValue('');
  });

  test('error del servidor: aviso con el email directo y reintentar', async ({ page }) => {
    await page.route('**/api/contact', (route) => route.fulfill({ status: 500, contentType: 'application/json', body: '{"ok":false}' }));
    await page.goto('/');
    await fill(page);
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    const alert = page.getByRole('alert');
    await expect(alert).toContainText('No se ha podido enviar. Escríbeme directamente a');
    await expect(alert.getByRole('link', { name: 'nicolasmazzilli2004@gmail.com' })).toHaveAttribute('href', 'mailto:nicolasmazzilli2004@gmail.com');
    await expect(page.getByRole('button', { name: 'Reintentar' })).toBeEnabled();
  });

  test('demasiados envíos: aviso propio', async ({ page }) => {
    await page.route('**/api/contact', (route) => route.fulfill({ status: 429, contentType: 'application/json', body: '{"ok":false}' }));
    await page.goto('/en/');
    await page.getByLabel('Name', { exact: true }).fill('Ana');
    await page.getByLabel('Email', { exact: true }).fill('ana@company.com');
    await page.getByLabel('Message', { exact: true }).fill('We are hiring a junior developer.');
    await page.getByRole('button', { name: 'Send message' }).click();
    await expect(page.getByRole('alert')).toContainText('You’ve sent several messages in a row.');
  });
});

test.describe('Sin JS y con movimiento reducido', () => {
  test.describe('sin JS', () => {
    test.use({ javaScriptEnabled: false });

    test('todo el contenido se ve y los detalles están abiertos', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');
      await expect(page.locator('html')).toHaveClass(/no-js/);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      for (const text of ['El equipo ficha', 'El dueño ve', 'Los informes que pide la ley']) {
        await expect(page.getByText(text)).toBeVisible();
      }
      await expect(page.getByRole('link', { name: 'Cortly en GitHub' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Copiar email' })).toBeHidden();
      await expect(page.locator('.clock')).toBeHidden();
      await page.screenshot({ path: 'tests/output/capturas/es-1440-sin-js.png', fullPage: true });
    });
  });

  test.describe('movimiento reducido', () => {
    test.use({ reducedMotion: 'reduce' });

    test('sin giro de fichas, y la secuencia de NIZZ sigue cambiando de pantalla', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');
      await page.waitForTimeout(1500);
      await expect(page.locator('.flap .ov')).toHaveCount(0);
      const steps = page.locator('.step');
      await steps.nth(1).evaluate((el) => el.scrollIntoView({ block: 'center' }));
      await expect(steps.nth(1)).toHaveClass(/is-active/);
      await expect(page.locator('[data-stage-screens] img').nth(1)).toHaveCSS('opacity', '1');
      await expect(page.locator('[data-stage-screens] img').nth(1)).not.toHaveCSS('filter', /blur/);
    });
  });
});

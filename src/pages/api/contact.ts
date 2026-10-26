import type { APIRoute } from 'astro';
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from 'astro:env/server';
import { normalize, validate } from '../../lib/contact';
import { getDict, type Lang } from '../../i18n';
import { site } from '../../data/site';

// Única función de servidor del sitio: el resto se genera estático.
export const prerender = false;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 3000;

// Límite por IP en la memoria de cada instancia: frena repeticiones y bots sencillos sin otra infraestructura.
const hits = new Map<string, number[]>();

function rateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

type Outcome = 'ok' | 'invalid' | 'rate' | 'server';

const STATUS: Record<Outcome, number> = { ok: 200, invalid: 400, rate: 429, server: 500 };

function respond(outcome: Outcome, wantsJson: boolean, lang: Lang, fields?: Record<string, string>): Response {
  if (wantsJson) {
    return new Response(JSON.stringify({ ok: outcome === 'ok', error: outcome === 'ok' ? undefined : outcome, fields }), {
      status: STATUS[outcome],
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }
  // Envío sin JS: una página mínima con el resultado y la vuelta a la portada.
  const t = getDict(lang);
  const c = t.contact;
  const message =
    outcome === 'ok'
      ? `<h1>${c.sentTitle}</h1><p>${c.sentText}</p>`
      : outcome === 'rate'
        ? `<p>${c.rateLimited}</p>`
        : `<p>${c.serverError.replace('{email}', `<a href="mailto:${site.email}">${site.email}</a>`)}</p>`;
  const html = `<!doctype html><html lang="${t.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${c.formTitle} · ${site.name}</title><style>body{font:1.0625rem/1.6 system-ui,sans-serif;max-width:40rem;margin:15vh auto;padding:0 24px}</style></head><body>${message}<p><a href="${t.home}#contacto">${t.notFound.back}</a></p></body></html>`;
  return new Response(html, { status: STATUS[outcome], headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond('invalid', wantsJson, 'es');
  }

  const lang: Lang = form.get('lang') === 'en' ? 'en' : 'es';
  const now = Date.now();

  // Campo trampa relleno o formulario enviado en menos de 3 s: se contesta como si hubiera ido bien y no se manda nada.
  const sentAt = Number(form.get('ts'));
  const tooFast = Number.isFinite(sentAt) && sentAt > 0 && now - sentAt < MIN_FILL_MS;
  if (String(form.get('web') ?? '') !== '' || tooFast) return respond('ok', wantsJson, lang);

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(ip, now)) return respond('rate', wantsJson, lang);

  const input = normalize({
    name: form.get('name'),
    email: form.get('email'),
    company: form.get('company'),
    message: form.get('message'),
  });
  const errors = validate(input);
  if (Object.keys(errors).length) return respond('invalid', wantsJson, lang, errors);

  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('[contacto] Faltan RESEND_API_KEY o CONTACT_TO en las variables de entorno.');
    return respond('server', wantsJson, lang);
  }

  const text = [
    `Nombre: ${input.name}`,
    `Email: ${input.email}`,
    `Empresa: ${input.company || '—'}`,
    `Idioma de la web: ${lang}`,
    '',
    input.message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: input.email,
        subject: `Portfolio · Mensaje de ${input.name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error('[contacto] Resend respondió', res.status, await res.text());
      return respond('server', wantsJson, lang);
    }
  } catch (error) {
    console.error('[contacto] No se pudo contactar con Resend', error);
    return respond('server', wantsJson, lang);
  }

  return respond('ok', wantsJson, lang);
};

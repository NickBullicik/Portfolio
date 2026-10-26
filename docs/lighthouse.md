# Lighthouse: antes y después del rediseño

Lighthouse 13.5.0 (la misma versión que la línea base), con estrangulamiento simulado y en Chromium headless. Las dos mediciones son del 26-10-2026.

- **Antes:** el sitio publicado en `https://nicolasmazzilli.vercel.app/`.
- **Después:** la compilación de `feat/rediseno` servida en local con `tests/serve.mjs`. La vista previa de Vercel está detrás de Vercel Authentication y no se puede medir sin cambiar ese ajuste.
  - El servidor local contesta `/_vercel/insights/script.js` como lo hace Vercel con Web Analytics activo (en producción responde 200).
  - Sin ese script, la única auditoría que falla es «errores en consola» por su 404, y buenas prácticas baja a 96.

| Página | Formato | Rendimiento | Accesibilidad | Buenas prácticas | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|---|
| Antes `/` | Móvil | 89 | 100 | 96 | 100 | 2,9 s | 2,9 s | 0 ms | 0 |
| Después `/` | Móvil | **98** | 100 | **100** | 100 | 1,7 s | 2,2 s | 0 ms | 0 |
| Después `/en/` | Móvil | **98** | 100 | **100** | 100 | 1,7 s | 2,2 s | 0 ms | 0 |
| Antes `/` | Escritorio | 99 | 100 | 96 | 100 | 0,6 s | 0,9 s | 0 ms | 0 |
| Después `/` | Escritorio | **100** | 100 | **100** | 100 | 0,4 s | 0,6 s | 0 ms | 0 |
| Después `/en/` | Escritorio | **100** | 100 | **100** | 100 | 0,4 s | 0,6 s | 0 ms | 0 |

## Qué cambió el rendimiento en móvil

La primera medición del rediseño dio 92. Lo subieron a 98 dos cambios:

1. El CSS va dentro del HTML (`build.inlineStylesheets: 'always'`), así que no hay hojas de estilo que bloqueen el primer pintado.
2. GSAP ya no se descarga al abrir la página. Las fichas del nombre y la línea de Cercanías usan la Web Animations API, y GSAP con ScrollTrigger solo se carga en escritorio, cuando la secuencia de NIZZ va a entrar en pantalla.

Los informes JSON están en la carpeta de la línea base del proyecto de diseño (`lh-home-*.json` para antes y `lh-rediseno-*.json` para después).

## En producción (26-10-2026, tras el merge)

Lighthouse 13.5.0 contra `https://nicolasmazzilli.vercel.app`.

| Página | Formato | Rendimiento | Accesibilidad | Buenas prácticas | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Móvil | 97 | 100 | 100 | 100 | 1,3 s | 1,6 s | 0 ms | 0 |
| `/en/` | Móvil | 98 | 100 | 100 | 100 | 1,2 s | 1,5 s | 0 ms | 0 |
| `/` | Escritorio | 100 | 100 | 100 | 100 | 0,3 s | 0,4 s | 0 ms | 0 |
| `/en/` | Escritorio | 100 | 100 | 100 | 100 | 0,3 s | 0,5 s | 0 ms | 0 |

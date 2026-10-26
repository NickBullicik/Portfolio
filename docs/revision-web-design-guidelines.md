# Revisión con Web Interface Guidelines

Revisión del 26-10-2026 de todo el código de interfaz (`src/components`, `src/layouts`, `src/pages`, `src/styles`, `src/scripts`) contra las directrices de Vercel ([command.md](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), descargadas ese día). Cada hallazgo está **corregido** o **justificado**. Las líneas son las del código tras la corrección.

## Corregidos

| Ubicación | Hallazgo | Corrección |
|---|---|---|
| `src/styles/global.css:81` | La cabecera fija podía tapar el elemento enfocado con el teclado (solo había `scroll-margin-top` en las secciones). | `scroll-padding-top: 80px` en `html`, que sirve para anclas y foco. Se quita el `scroll-margin-top` de las secciones. |
| `src/styles/global.css:150` | Sin `touch-action: manipulation`. | Añadido en enlaces, botones, campos y etiquetas. |
| `src/styles/global.css:82` | `-webkit-tap-highlight-color` sin decidir fuera de `.btn`. | Resalte de toque con el azul Adif al 12 %. |
| `src/styles/global.css:155` | Rebote elástico de la página con ratón. | `overscroll-behavior: none` en `html` solo con `pointer: fine`; en táctil se mantiene el comportamiento nativo. |
| `src/styles/global.css:407` | Las etiquetas de tecnología podían partirse en dos líneas. | `white-space: nowrap` en `.chip`. |
| `src/components/Hero.astro:71` | El móvil del hero está en la primera pantalla y cargaba en diferido. | `loading="eager"`. La captura del panel ya llevaba `fetchpriority="high"` (línea 60). |
| `src/layouts/Base.astro:54` | Faltaba `<meta name="theme-color">`. | `white`, igual que el fondo. |
| `src/components/SiteHeader.astro:231` | El salto de los segundos forzaba un reflow cada segundo (`void offsetWidth` para reiniciar la animación). | Web Animations API; con movimiento reducido no hay salto. |
| `src/components/SiteHeader.astro:79` | La marca no tenía estado hover. | El cuadrado «NM» pasa a azul Adif oscuro. |
| `src/components/SiteHeader.astro:13` | axe `label-content-name-mismatch`: el `aria-label` de la marca no contenía el texto visible. | Sin `aria-label`: el nombre visible es el nombre accesible y, por debajo de 420 px, se queda como texto oculto para lectores de pantalla. |
| `src/i18n/en.ts:120` | Comillas rectas y apóstrofos `'` en los textos en inglés. | Comillas “ ” y apóstrofo ’ en todos los textos y textos alternativos. |
| `src/components/Hero.astro:22`, `Nizz.astro:29`, `Board.astro:40`, `Board.astro:59`, `Journey.astro:44`, `SiteHeader.astro:13` | Nombres propios y tecnologías expuestos a la traducción automática del navegador. | `translate="no"` en el nombre, NIZZ, los proyectos y las listas de tecnologías. |
| `src/components/Board.astro:294` | Cierre del detalle con curva `ease-in` (revisión de movimiento). | `ease-out` a 180 ms; apertura a 300 ms. |

## Justificados (sin cambio)

| Ubicación | Directriz | Por qué se queda así |
|---|---|---|
| `src/components/Contact.astro:222` | No usar `outline: none` sin sustituto. | Es `.field input:focus`: el contorno se sustituye por borde azul Adif y un anillo de 3 px con `box-shadow`. Se usa `:focus` y no `:focus-visible` porque en los campos de texto el navegador muestra el foco siempre. |
| `src/components/Contact.astro:322`, `src/styles/global.css:166` | Igual. | `.form-done` y `main` reciben el foco por programa (confirmación del envío y salto al contenido) para que el lector de pantalla los anuncie. No son controles: un anillo ahí confundiría. |
| `src/components/Board.astro:293` | Animar solo `transform` y `opacity`. | La altura del detalle no se conoce de antemano; `grid-template-rows` es la única forma de abrirlo sin medir con JS. Es una fila cada vez, 300 ms, y se puede interrumpir. El contenido entra con `transform` y `opacity`. |
| `src/components/Nizz.astro:316` | Igual. | `width` en las tres barras de progreso (3 px de alto). Con `transform: scaleX` los huecos entre barras quedarían desiguales; el coste es nulo. |
| `src/scripts/motion.ts:106` | Igual. | `clip-path` y `filter: blur(6px)` en el cambio de pantalla del móvil fijo: es el momento firma y el craft floor los admite. Con movimiento reducido se cambia por un fundido de 200 ms sin desenfoque. |
| `src/components/SiteHeader.astro:234` | Movimiento automático de más de 5 s necesita pausa. | El reloj de Alicante es parte del mundo «Estación» y está en el contrato de dirección. Es texto que cambia cada segundo, solo en escritorio (≥ 1101 px); con movimiento reducido no salta y con la pestaña oculta se detiene. Queda anotado para el revisor final por si pide quitar los segundos. |
| `src/components/Contact.astro:305` | Los bucles decorativos se paran con movimiento reducido. | El spinner no es decorativo: indica que el envío está en curso y solo existe mientras dura la petición. |
| `src/components/Contact.astro:70` | Avisar antes de salir con cambios sin guardar. | En un formulario de contacto de cuatro campos, un `beforeunload` es más molesto que útil. |
| `src/components/Contact.astro` | Los placeholders terminan en `…` y muestran un ejemplo. | No hay placeholders: las etiquetas son visibles siempre. |
| `src/components/Board.astro:54` | El estado de la interfaz (paneles abiertos) va en la URL. | Son cuatro detalles de una página de presentación; enlazar a un detalle abierto no aporta nada. |
| `src/layouts/Base.astro` | Detectar el idioma por `Accept-Language`. | La web no redirige: el idioma lo elige el visitante con un enlace real y los buscadores lo sacan de `hreflang`. Una redirección automática esconde la otra versión. |
| `src/layouts/Base.astro` | Zonas seguras con `env(safe-area-inset-*)`. | No se usa `viewport-fit=cover`, así que el navegador ya deja el contenido fuera de la muesca. |
| `src/i18n/en.ts` | Title Case en títulos y botones. | La web es bilingüe y el español no usa Title Case: las dos versiones mantienen la mayúscula solo al inicio. |
| `src/i18n/*.ts` | Segunda persona, evitar la primera. | Es un portfolio: habla Nicolás («Escríbeme», «te lo enseño»). |
| `src/components/Board.astro:38` | El botón y el enlace llevan varios textos dentro. | Es el patrón de fila de panel: el nombre accesible incluye fecha, destino, información, estado y vía, que es lo que se lee en pantalla. |

## Sin hallazgos

Imágenes (`astro:assets` con `width`/`height`, `srcset` y diferido salvo la primera pantalla), formularios (`label`, `name`, `autocomplete`, `type="email"`, `inputmode`, `spellcheck="false"`, errores junto al campo, foco en el primero que falla y botón activo hasta que empieza el envío), `…` en «Enviando…», cifras tabulares en horas y fechas, `text-wrap: balance` en los títulos, sin `transition: all`, sin `user-scalable=no`, sin bloqueo de pegado y fechas del reloj con `Intl.DateTimeFormat`.

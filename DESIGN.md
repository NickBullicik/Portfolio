---
name: Nicolás Mazzilli · Estación
description: Portfolio de un desarrollador full-stack junior contado como una estación de Cercanías a la luz del día.
colors:
  bg: "#ffffff"
  bg-subtle: "#f4f6f9"
  row-hover: "#f7f9fc"
  tile: "#eef1f6"
  ink: "#0b1526"
  ink-hover: "#1d2a40"
  ink-busy: "#36415a"
  fg-2: "#46516a"
  fg-3: "#5a6478"
  fg-muted: "#7d869a"
  line: "#e5e9f0"
  line-strong: "#d4dae4"
  field-line: "#7d869a"
  scroll: "#bcc5d4"
  adif: "#0d3b91"
  adif-deep: "#082d72"
  adif-soft: "#e8eef9"
  amber: "#ffb71b"
  ok: "#11803a"
  ok-soft: "#dff3e6"
  danger: "#b42318"
  danger-line: "#c4321f"
  frame-bar: "#eff2f6"
  frame-dot: "#d6dbe3"
  phone: "#111622"
  nizz-water: "#bfede7"
  on-dark: "#ffffff"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.8rem + 4.4vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  display-sign:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2rem + 3.6vw, 5rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  flap:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 0.9rem + 4.4vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title-lg:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.05rem + 1.1vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
  button:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    letterSpacing: "0em"
    fontFeature: "tnum"
  figure-sign:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  sm: "7px"
  md: "10px"
  lg: "12px"
  xl: "14px"
  2xl: "16px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(80px, 11vw, 144px)"
  grid-gap: "32px"
  board-inline: "24px"
  tap: "44px"
  tap-touch: "48px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-primary-busy:
    backgroundColor: "{colors.ink-busy}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.bg-subtle}"
  button-small:
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "40px"
  button-copy:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "{spacing.tap}"
  button-copy-hover:
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.ink}"
  link:
    textColor: "{colors.adif}"
  link-hover:
    textColor: "{colors.adif-deep}"
  status-pill:
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.fg-2}"
    rounded: "999px"
    padding: "0 14px 0 12px"
    height: "32px"
  chip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg-2}"
    rounded: "8px"
    padding: "0 10px"
    height: "28px"
  chip-live:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 10px 0 8px"
    height: "26px"
  stack-item:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 16px 0 14px"
    height: "44px"
  via:
    backgroundColor: "{colors.adif}"
    textColor: "{colors.on-dark}"
    typography: "{typography.figure-sign}"
    rounded: "{rounded.md}"
    size: "44px"
  via-lg:
    backgroundColor: "{colors.adif}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
    size: "76px"
  via-row:
    backgroundColor: "{colors.adif-soft}"
    textColor: "{colors.adif}"
    rounded: "9px"
    size: "36px"
  via-row-active:
    backgroundColor: "{colors.adif}"
    textColor: "{colors.on-dark}"
  board:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.2xl}"
  board-head:
    backgroundColor: "{colors.adif}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    padding: "13px 24px"
  board-row-lead:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    padding: "16px 24px"
  board-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    padding: "12px 24px"
    height: "72px"
  board-row-hover:
    backgroundColor: "{colors.row-hover}"
  flap-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    typography: "{typography.flap}"
    rounded: "0.1em"
    height: "1.2em"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 14px"
    height: "48px"
  form-panel:
    backgroundColor: "{colors.bg-subtle}"
    padding: "clamp(24px, 3vw, 32px)"
  frame:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.xl}"
  frame-bar:
    backgroundColor: "{colors.frame-bar}"
    padding: "0 14px"
    height: "40px"
  phone:
    backgroundColor: "{colors.phone}"
    rounded: "44px"
    padding: "9px"
    width: "286px"
  toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
  nav-link:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "{spacing.tap}"
  nav-link-hover:
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.ink}"
  brand-mark:
    backgroundColor: "{colors.adif}"
    textColor: "{colors.on-dark}"
    rounded: "8px"
    size: "30px"
---

# Design System: Nicolás Mazzilli · Estación

## Overview

**Creative North Star: "La estación a la luz del día"**

La web es una estación de Cercanías de Alicante a media mañana: blanco frío, tinta azul noche y una señalética que se lee de lejos. Nicolás es un tren a punto de salir y cada proyecto es una salida con su vía. El mundo se construye con objetos de estación reconocibles (el letrero de vía, el panel de salidas, la línea de Cercanías, las fichas split-flap del nombre y el reloj de Alicante) colocados sobre una página de producto clara, nunca con decoración temática añadida.

La densidad es media y se escanea: pocos bloques grandes separados por bandas de fondo a ancho completo, mucho aire entre secciones y grupos apretados dentro de cada una. La pieza más fuerte es la prueba: NIZZ en un marco de navegador con el móvil superpuesto. El color está racionado. El azul Adif rellena solo los objetos de estación, el ámbar marca solo lo que está pasando ahora y todo lo demás es tinta sobre blanco.

El movimiento es mecánico, como el de una estación: fichas que giran y caen con un rebote de un paso, una línea que avanza a saltos de parada en parada y un móvil fijo que cambia de pantalla. Todo el contenido está pintado desde el primer momento; el movimiento solo gira o desplaza lo que ya se ve. Rechazos confirmados: el hero sobre una rejilla de tarjetas iguales y el panel oscuro con neón.

**Key Characteristics:**
- Fondo claro y frío, sin modo oscuro (`color-scheme: light`).
- Azul Adif como señalética; ámbar como «en directo».
- Geist para todo el texto; Geist Mono solo para cifras.
- Sombras suaves y largas solo en los objetos físicos: marco, panel, móvil y capturas.
- Movimiento de estación: giro de ficha, salto de parada y cambio de pantalla.
- Todo se lee sin JS y sin movimiento.

## Colors

Paleta de estación de día: tinta azulada sobre blanco frío, una señalética azul y un único color cálido reservado para lo que está pasando ahora.

### Primary
- **Azul Adif** (`adif`): el color de la señalética. Como relleno, solo en objetos de estación: el letrero de vía, la cabecera del panel de salidas, la vía y las paradas de la línea de Cercanías, el cuadrado «NM» de la marca, las barras de progreso de la secuencia de NIZZ y el guion de cada tecnología en «Lo que uso». Como trazo o texto es el color de la interacción: enlaces, anillo de foco, caret, selección de texto (con texto blanco), borde del campo enfocado y el destino final «Tu empresa».
- **Azul Adif profundo** (`adif-deep`): hover de los enlaces y del cuadrado de la marca.
- **Azul Adif lavado** (`adif-soft`): fondo del letrero de vía en reposo dentro de las filas del panel, con el número en Adif. Al pasar, enfocar o abrir la fila, el letrero se rellena de Adif.

### Secondary
- **Ámbar de servicio** (`amber`): lo vivo. El punto del reloj de Alicante y de la pastilla «Disponible ahora», el chip «En servicio», la fila «Ahora · Tu equipo» del panel y el centro de la parada actual de la línea. Siempre lleva texto o marca en tinta.

### Neutral
- **Blanco frío** (`bg`): fondo de página, del panel, del marco y de los campos; también el fondo de chips y tecnologías cuando están sobre una banda niebla.
- **Blanco niebla** (`bg-subtle`): bandas de sección alternas (base del hero, NIZZ, Trayectoria), panel del formulario, pastilla de estado y hover de los controles sin relleno.
- **Reflejo de fila** (`row-hover`): hover y estado abierto de una fila del panel.
- **Gris ficha** (`tile`): cara de las fichas split-flap del nombre.
- **Tinta azul noche** (`ink`): texto principal, botón principal y toast.
- **Tinta levantada** (`ink-hover`) y **tinta en espera** (`ink-busy`): hover del botón principal y botón de enviar desactivado mientras se envía.
- **Pizarra** (`fg-2`): texto secundario: rol, gancho, información de cada salida, etiquetas de campo y navegación.
- **Pizarra clara** (`fg-3`): metadatos: fechas, índices, pies de captura, notas y el email bajo los botones.
- **Gris apagado** (`fg-muted`): frases inactivas de la secuencia de NIZZ (solo en texto grande, 3,4:1 sobre niebla) y anillo del botón secundario al pasar.
- **Junta fina** (`line`) y **junta marcada** (`line-strong`): divisores entre filas, borde inferior de la cabecera al hacer scroll y pie; bordes de datos y pasos, vía sin recorrer, anillo del botón secundario y subrayado del email.
- **Borde de campo** (`field-line`): borde de los campos de texto (3,6:1 sobre blanco).
- **Riel** (`scroll`): barra de scroll.
- **Materiales de objeto** (`frame-bar`, `frame-dot`, `phone`): barra del navegador, sus tres botones de ventana y la carcasa del móvil.
- **Agua NIZZ** (`nizz-water`): solo el fondo detrás de la captura en la pantalla del móvil. Es un color prestado de la marca de NIZZ y no sale de ahí.
- **Blanco sobre oscuro** (`on-dark`): texto sobre tinta y sobre Adif.

### Feedback
- **Verde confirmado** (`ok`) y **verde lavado** (`ok-soft`): check al copiar el email y círculo de «Mensaje enviado».
- **Rojo aviso** (`danger`) y **rojo borde** (`danger-line`): texto e icono de error; borde del campo inválido y de la alerta del servidor.

### Named Rules
**Regla de lo vivo.** El ámbar solo marca lo que está pasando ahora: el reloj, la disponibilidad, «En servicio», la fila «Ahora» y la parada actual. Siempre con texto en tinta, nunca en blanco. Nada estático va en ámbar.

**Regla del objeto de estación.** El azul Adif rellena objetos de estación y nada más: letreros, cabecera del panel, línea, marca. En la interacción aparece solo como trazo (enlace, foco, selección, campo enfocado). La acción principal va en tinta, nunca en Adif.

**Regla del token.** Ningún hex, `rgb()` ni nombre de color suelto en los componentes: todo sale de `@theme` en `src/styles/global.css`. Los matices se hacen con `color-mix()` sobre un token (Adif al 12 %, 16 % o 35 %; blanco al 82 %; tinta al 5 %).

## Typography

**Display Font:** Geist (con ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (con ui-monospace, monospace), solo para cifras

**Character:** Geist es una grotesca neutra y precisa, como la rotulación de una estación moderna; los pesos intermedios de la variable (550 y 650) dan titulares firmes sin llegar al negro. Geist Mono pone el ritmo de horario en las cifras. Las dos se sirven desde el propio sitio con la API de fuentes de Astro (Geist 400–700 con precarga, Geist Mono 400–600).

### Hierarchy
- **Display** (650, clamp(3rem, 1.8rem + 4.4vw, 6rem), 0.96, -0.04em): «¿Hablamos?» y el título de la 404. Tope de 6rem.
- **Display de letrero** (650, clamp(3rem, 2rem + 3.6vw, 5rem), 0.95, -0.04em): el nombre «NIZZ» junto a su letrero de vía.
- **Fichas** (600, clamp(2.5rem, 0.9rem + 4.4vw, 4.5rem), 1, tracking 0, mayúsculas): solo el nombre del hero. En móvil, clamp(2.25rem, 12.4vw, 3.5rem).
- **Headline** (650, clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem), 1.02, -0.035em, `text-wrap: balance`): títulos de sección.
- **Title grande** (500, clamp(1.375rem, 1.05rem + 1.1vw, 1.875rem), 1.2, -0.025em): rol del hero, qué es NIZZ y las frases de la secuencia (hasta clamp(2rem, 1.2rem + 1.4vw, 2.5rem) en la secuencia fija de escritorio). Medida de 24–26ch.
- **Title** (600, 1.375rem, 1.25, -0.025em): destino de cada salida. En la misma familia: lugar de cada parada (1.1875rem), título del formulario (1.25rem) y «Tu equipo» en la fila «Ahora» (650, hasta 1.875rem).
- **Body** (400, 1.0625rem, 1.6; 1rem en ≤719 px): texto corrido. Gancho del hero a clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem) con 36ch como máximo.
- **Body pequeño** (400, 0.9375rem, 1.45): descripciones de parada, notas, pies y alertas; 0.875rem para etiquetas de campo, errores y fechas de la línea.
- **Label** (500, 0.75rem, 1, 0.1em, mayúsculas): cabecera de columnas del panel. Variantes: «EN GITHUB» a 0.08em, chip «En servicio» a 600 y 0.06em, «AHORA» a 0.9375rem 600 y 0.08em, «VÍA» del letrero a 0.5rem 600 y 0.12em.
- **Button** (500, 1rem, 1, -0.01em): botones; 0.9375rem en el pequeño y en copiar.
- **Figure** (Geist Mono 400, 0.9375rem, `tabular-nums`, tracking 0): fechas MM/AA del panel, fechas de la línea, «1/3» de la secuencia y la hora del reloj (500).
- **Figure de letrero** (Geist Mono 600, 1.375rem, 1): el número de vía; 1rem en las filas, 2.5rem en el letrero grande.

### Named Rules
**Regla de la cifra.** Geist Mono solo para cifras que se leen como un horario: horas, fechas, número de vía y el contador «1/3». Siempre con `tabular-nums` y tracking 0. Nunca para palabras, URLs ni etiquetas que quieran parecer técnicas.

**Regla del rótulo.** Las mayúsculas espaciadas solo existen dentro de los objetos de estación: columnas del panel, «Ahora», «En servicio», «En GitHub» y «Vía». Nunca encima de un título.

**Regla del tracking.** Los titulares van de -0.025em a -0.04em, que es el tope; fichas y cifras van a 0.

## Layout

Página de una sola columna de lectura con rejilla de 12 columnas por dentro. El contenedor mide min(100 % − 2 × `gutter`, 1200 px) y el margen lateral es fluido (`spacing.gutter`). Cada sección tiene `spacing.section` de padding vertical.

Las secciones se separan con bandas de fondo a ancho completo, con corte duro y sin degradado: el hero es blanco con una base niebla de 340 px que pasa por detrás del marco de navegador (en móvil la base empieza a media altura del marco); NIZZ sigue en niebla sin padding superior para continuar esa base; Proyectos va en blanco; Trayectoria y «Lo que uso», en niebla; Contacto, en blanco; el pie se separa con una junta fina.

Dentro de las secciones, la rejilla de 12 columnas con `spacing.grid-gap` reparte: cabecera de NIZZ en 7 + 4 columnas, secuencia en 6 + 5, «Lo que uso» en 4 + 8 y Contacto en 6 + 5. Por debajo de 1024 px todo pasa a ancho completo y por debajo de 720 px a una columna.

La cabecera es fija, de 64 px (60 px en móvil), y `scroll-padding-top: 80px` evita que tape anclas y foco. El panel de salidas usa columnas de 96 / 140–190 / 1fr / 150 / 88 px con 24 px de hueco y de padding lateral (84 / 120–160 / 1fr / 130 / 80 px por debajo de 1100 px); por debajo de 1024 px cada fila se reordena en tres renglones (fecha · estado · vía, destino, información) y en móvil el panel se ensancha hasta 8 px del borde. La línea de Cercanías va en 5 columnas en escritorio, en 3 sin vía entre 720 y 1023 px y en vertical en móvil.

Puntos de corte: 420 px (el nombre de la marca pasa a ser solo para lectores de pantalla), 720 px (móvil), 1024 px (escritorio, secuencia fija de NIZZ) y 1101 px (reloj). Objetivos táctiles: `spacing.tap` con ratón y `spacing.tap-touch` en ≤1023 px o con puntero grueso.

## Elevation & Depth

Sistema híbrido: la profundidad de la página sale de las bandas tonales (blanco frío / blanco niebla) y solo los objetos físicos levantan del plano. Las sombras están teñidas de tinta (`rgb(11 21 38)`), siempre con desplazamiento vertical y desenfoque suave, y en capas: un contacto de 1–2 px, una sombra media y una sombra ambiental larga con extensión negativa.

### Shadow Vocabulary
- **Marco** (`box-shadow: 0 1px 2px rgb(11 21 38 / 0.06), 0 12px 24px -8px rgb(11 21 38 / 0.1), 0 40px 80px -24px rgb(11 21 38 / 0.2)`): marco de navegador del hero, el objeto que más pesa.
- **Panel** (`box-shadow: 0 1px 2px rgb(11 21 38 / 0.05), 0 10px 24px -10px rgb(11 21 38 / 0.12), 0 28px 56px -28px rgb(11 21 38 / 0.18)`): panel de salidas.
- **Móvil** (`box-shadow: 0 2px 4px rgb(11 21 38 / 0.12), 0 24px 48px -12px rgb(11 21 38 / 0.35)`): carcasa del móvil, la más oscura porque se superpone al marco.
- **Captura** (`box-shadow: 0 1px 2px rgb(11 21 38 / 0.08), 0 12px 28px -12px rgb(11 21 38 / 0.25)`): captura en el detalle de una salida.
- **Anillo de punto** (`box-shadow: 0 0 0 1px rgb(11 21 38 / 0.18)`): contorno del punto ámbar para que no se pierda sobre blanco.

Los bordes que no son sombra se dibujan con un anillo interior de 1 px (`inset 0 0 0 1px`): botón secundario (junta marcada) y alerta del formulario (rojo borde). El foco de los campos es un anillo de 3 px de Adif al 16 %.

### Named Rules
**Regla de los objetos que pesan.** Solo proyectan sombra los objetos que existirían de verdad en una estación o sobre una mesa: el marco de navegador, el panel de salidas, el móvil y las capturas. Texto, formulario, chips y botones son planos.

**Regla de una sola elevación.** Un contenedor lleva borde o sombra, nunca las dos cosas.

## Shapes

Esquinas suaves y contenidas, que crecen con el tamaño del objeto: 7 px (`rounded.sm`) en el chip «En servicio» y la barra de URL; 10 px (`rounded.md`) en controles pequeños, letrero de vía y captura del detalle; 12 px (`rounded.lg`) en botones, campos, toast y tecnologías; 14 px (`rounded.xl`) en el marco de navegador, el letrero grande y el panel en móvil; 16 px (`rounded.2xl`) en el panel de salidas. Los contenedores no pasan de 16 px.

Formas propias del mundo:
- **Letrero de vía:** siempre un cuadrado con esquinas suaves, nunca un círculo.
- **Ficha:** rectángulo de 1.2em de alto con radio de 0.1em y una junta horizontal de 1 px a media altura (blanco con una sombra de tinta al 5 %): es la bisagra del split-flap.
- **Línea:** vía de 4 px con extremos de 2 px; paradas circulares de 22 px con anillo de 4 px; la parada final crece a 30 px con anillo de 7 px.
- **Móvil:** radio exterior de 44 px y pantalla de 35 px con proporción 390:844; se escala a 30/24 px en la secuencia apilada y a 22/18 px en el hero móvil.
- **Círculos** solo en puntos: estado vivo, paradas, botones de ventana, spinner y check de envío.
- **Pastilla** (999 px) solo en la pastilla de estado del hero; los chips son rectángulos suaves (8 px).
- **Iconos:** sprite SVG propio de trazo único (1.75, extremos redondeados) a 18 px; 16 px en enlaces con flecha.

## Components

### Buttons
Firmes y silenciosos: tinta o blanco, nunca color de marca.
- **Shape:** esquinas suaves (12 px, `rounded.lg`), 48 px de alto, 20 px de padding lateral, icono de 18 px a 10 px del texto.
- **Primary:** tinta con texto blanco. Es la acción de contacto («Escríbeme», «Enviar mensaje»). Hover: tinta levantada. Al enviar: tinta en espera, cursor de progreso y spinner de 16 px (anillo blanco al 35 % con arco blanco, 700 ms lineal) delante de «Enviando…».
- **Secondary:** blanco con anillo interior de 1 px en junta marcada; hover: anillo gris apagado y fondo niebla. Es «Copiar email».
- **Small:** 40 px de alto con ratón y 48 px en ≤1023 px o con puntero grueso, radio de 10 px, 14 px de padding y 0.9375rem; solo en la cabecera.
- **Copiar (sin relleno):** pizarra sobre transparente, 0.9375rem, alto y ancho mínimos de `spacing.tap`; hover: tinta sobre niebla. Al copiar, el icono pasa a un check verde y el texto a «Copiado» durante 2 s, con toast. Sin JS no se muestra.
- **Hover / Focus:** transiciones de 200 ms con `--ease-out`; al pulsar, `scale(0.97)` en 160 ms (sin escala con movimiento reducido). Foco: anillo global de 2 px en Adif a 3 px de distancia; dentro de la fila ámbar «Ahora» el anillo pasa a tinta.
- **Móvil:** los dos botones del hero ocupan media fila cada uno; «Enviar mensaje» y el botón de la fila «Ahora» ocupan todo el ancho.

### Links
- **Texto:** Adif con subrayado de 1 px al 35 % separado 4 px; hover: Adif profundo con el subrayado lleno.
- **Con flecha:** icono de 16 px que se desplaza 2 px al pasar (↗ en diagonal hacia fuera, ↓ hacia abajo para anclas). Alto mínimo `spacing.tap`.
- **Email del contacto:** tinta a 550, clamp(1.25rem, 0.8rem + 1.6vw, 2.125rem), subrayado de 2 px en junta marcada a 8 px; hover: subrayado Adif.

### Chips
- **Tecnologías:** etiquetas no interactivas de 28 px, 10 px de padding, radio de 8 px, pizarra a 0.8125rem 500, en una línea y con 6 px de separación. Blancas sobre bandas niebla y niebla sobre blanco.
- **En servicio:** ámbar con texto en tinta, 26 px, radio de 7 px, mayúsculas a 0.75rem 600 y 0.06em, con un cuadradito de tinta de 7 px (radio de 2 px) delante.
- **Lo que uso:** pastillas blancas de 44 px, radio de 12 px, 1rem 500, con un guion Adif de 16 × 4 px delante, como un tramo de línea.
- **Pastilla de estado:** niebla, pizarra a 0.875rem 500, 32 px, con el punto ámbar de 8 px. Es única: dice la disponibilidad en directo y no es un patrón para encabezar otras secciones.

### Cards / Containers
No hay tarjetas. Los contenedores son objetos del mundo (marco, panel, móvil) o el panel del formulario.
- **Corner Style:** 14–16 px en objetos (ver Shapes).
- **Background:** blanco en objetos; niebla en el formulario.
- **Shadow Strategy:** objetos con su sombra (ver Elevation & Depth); el formulario es plano.
- **Border:** ninguno; las filas del panel se separan con junta fina.
- **Internal Padding:** 24 px en el panel; clamp(24px, 3vw, 32px) con 18 px entre campos en el formulario. El formulario lleva 16 px de radio, el tope de la escala.

### Inputs / Fields
- **Style:** 48 px de alto mínimo (área de texto de 128 px, redimensionable en vertical), 12 px × 14 px de padding, borde de 1 px en borde de campo, radio de 12 px, fondo blanco, Geist 400 a 1rem/1.4. Etiqueta siempre visible encima (pizarra, 0.875rem 500); sin placeholders.
- **Hover:** borde en pizarra.
- **Focus:** borde Adif y anillo de 3 px de Adif al 16 %, en 150 ms.
- **Error:** borde en rojo borde con anillo al 16 % y mensaje en rojo aviso (0.875rem) debajo del campo. La alerta del servidor es blanca con anillo interior rojo, icono de alerta y el email como enlace.
- **Éxito:** el formulario se sustituye por un check verde en un círculo verde lavado de 36 px, «Mensaje enviado» (1.25rem 600) y el enlace «Escribir otro».

### Navigation
- **Cabecera:** fija, blanca al 96 %, con una junta fina inferior que aparece al hacer scroll.
- **Marca:** cuadrado Adif de 30 px (radio de 8 px) con «NM» en blanco a 0.8125rem 600, seguido del nombre a 600 y -0.02em. Hover: cuadrado en Adif profundo. Por debajo de 420 px el nombre queda solo para lectores de pantalla.
- **Enlaces:** NIZZ · Proyectos · Trayectoria, en pizarra a 0.9375rem 500, alto `spacing.tap`, radio de 10 px; hover: tinta sobre niebla.
- **Reloj:** separado por una junta fina, punto ámbar, «Alicante» en pizarra clara y la hora en Geist Mono 500 a 0.9375rem en tinta, con 8ch de ancho fijo. Se oculta por debajo de 1101 px y sin JS.
- **Idioma y acción:** «EN» a 0.875rem con 0.04em en un cuadrado táctil, y el botón secundario pequeño «Escríbeme».
- **Móvil (≤719 px):** 60 px de alto, sin enlaces; quedan marca, idioma y botón.

### Letrero de vía
El objeto que numera cada salida: vía 1 es NIZZ y las vías 2–5, el resto de proyectos (en la 404, «?»).
- Cuadrado Adif con el número en Geist Mono 600 blanco y «VÍA» encima en Geist 600, 0.5rem, mayúsculas, 0.12em, al 85 %.
- Tamaños: 44 px con radio de 10 px; grande de 76 px con radio de 14 px (60 px y radio de 12 px en móvil).
- En las filas del panel: 36 px con radio de 9 px, Adif lavado con número Adif; se rellena de Adif al pasar, enfocar o abrir. La vía 1 va siempre rellena.

### Panel de salidas
Los proyectos son salidas de un panel, no tarjetas.
- **Contenedor:** blanco, 16 px de radio (14 px en móvil), sombra de panel.
- **Cabecera:** franja Adif con las columnas Salida · Destino · Información · Estado · Vía en blanco al 82 %, en estilo Label. Se oculta en móvil.
- **Fila «Ahora»:** franja ámbar con texto en tinta: «AHORA», «Tu equipo», «Próxima salida» y el botón principal «Escríbeme».
- **Filas:** cada una es un botón a todo el ancho de 72 px mínimo: fecha MM/AA en cifra, destino en Title, información en pizarra, estado en rótulo («EN GITHUB» o el chip «En servicio») y letrero de vía con un icono «+» que gira 45° y se vuelve Adif al abrir (250 ms). NIZZ lleva una flecha ↑ y salta a su sección.
- **Estados:** hover y abierta en reflejo de fila; el foco es un anillo interior (desplazado -3 px), sin radio.
- **Detalle:** se abre con `grid-template-rows` de 0fr a 1fr (300 ms con `--ease-out` al abrir, 180 ms al cerrar). Su contenido entra con opacidad y un desplazamiento de -10 px a 0 (280 ms con 60 ms de retraso; el desplazamiento, con `--ease-expo`). Dentro: chips, enlace a GitHub ↗ y captura con radio de 10 px y sombra de captura. Cerrado es `inert`. Sin JS, todos los detalles están abiertos. Con movimiento reducido no hay transición de altura ni desplazamiento.

### Fichas split-flap y reloj
La firma del sitio.
- **Fichas:** una por letra del nombre, en gris ficha, del ancho de su letra (mínimo 0.62em), con 3 px entre fichas (2 px en móvil) y 0.3em entre palabras, para que se lea como un nombre.
- **Animación:** el texto final está en el HTML. Con la Web Animations API, y tras cargar las fuentes, cada ficha empieza a girar a los 180 ms + 34 ms por posición, muestra de 4 a 11 letras al azar (60 ms lineales cada 62 ms) y cae en su letra con 280 ms y `--ease-spring`: un solo rebote. La tapa se retira al terminar. Con movimiento reducido no gira.
- **Segundos del reloj:** la misma caída (de -100 % a 0) en 220 ms con `--ease-spring`, en su propia ventana de 1.3em. Se detiene con la pestaña oculta y no salta con movimiento reducido.

### Marco de navegador con móvil
- **Marco:** blanco, 14 px de radio, sombra de marco. Barra de 40 px con tres puntos de 10 px y la dirección «nizz.es» con candado centrada en una cápsula blanca de 24 px (radio de 7 px, 340 px como máximo). En móvil la barra mide 28 px y los puntos, 7 px.
- **Móvil:** carcasa de 9 px de bisel, radio de 44 px y sombra de móvil; pantalla con fondo de agua NIZZ detrás de la captura. En escritorio se superpone a la esquina superior derecha del marco (286 px de ancho, 250 px por encima); en tableta mide 200 px; en móvil, 118 px y asoma 36 px por debajo, a la derecha.
- **Pie:** letrero de vía 1 · NIZZ · «En servicio» · texto · «Cómo funciona ↓».
- Las capturas de NIZZ se muestran tal cual, con su propia marca.

### Secuencia de NIZZ
- **Por defecto** (sin JS, en tableta y en móvil): tres pasos apilados y separados por junta marcada, cada uno con su índice «1/3», su frase y su móvil de 180–190 px.
- **Escritorio con JS:** frases en 6 columnas, cada una de 72vh de alto; un móvil fijo de 290 px en 5 columnas, centrado en vertical. La disposición se aplica desde el primer pintado para que nada se mueva al cargar GSAP. Las frases inactivas pasan a gris apagado (300 ms).
- **Carga:** GSAP y ScrollTrigger se descargan solo a partir de 1024 px y cuando la sección está a una pantalla de distancia, dentro de `gsap.matchMedia()`.
- **Cambio de pantalla:** al cruzar el 55 % de la ventana, la pantalla nueva entra con `clip-path` desde abajo (desde arriba al volver), desenfoque de 6 px a 0 y escala de 1.04 a 1, en 700 ms con `expo.out`; la anterior baja a 0.94 y al 50 % en 500 ms. Debajo, tres barras de 3 px: las recorridas en Adif y la actual crece de 28 a 44 px (400 ms con `--ease-expo`). Con movimiento reducido, un fundido de 200 ms.

### Línea de Cercanías
La trayectoria como una línea que termina en la empresa que lee.
- Vía de 4 px en junta marcada con el tramo recorrido en Adif. Paradas de 22 px con anillo Adif y centro blanco; la actual, con centro ámbar; la última, «Próxima parada · Tu empresa», más grande y con el destino en Adif a 1.5rem.
- Cada parada: fecha en cifra (pizarra clara), lugar en Title (1.1875rem 600) y una línea en pizarra.
- **Movimiento:** la primera vez que entra en pantalla, el tramo Adif se dibuja con `steps(4)` en 1100 ms: salta de parada en parada (horizontal en escritorio, vertical en móvil). Si ya estaba a la vista o se ha pasado de largo, queda dibujada. Sin JS o con movimiento reducido, está dibujada desde el principio.

### Toast
- Tinta con texto blanco a 0.9375rem 500, radio de 12 px, 10 × 16 px de padding, centrado a 24 px del borde inferior. Entra subiendo 16 px (300 ms con `--ease-expo`) y se va a los 2 s. Lo anuncia el lector de pantalla (`role="status"`).

## Do's and Don'ts

### Do:
- **Usa** solo tokens de `@theme` para color, radio, sombra, curva y duración, y haz los matices con `color-mix()` sobre un token.
- **Pon** la acción principal en tinta (`button-primary`) y la secundaria en blanco con anillo interior de 1 px.
- **Reserva** el ámbar para lo que está vivo y acompáñalo siempre de texto en tinta.
- **Numera** las salidas con el letrero de vía: vía 1 para NIZZ, 2–5 para el resto.
- **Escribe** horas, fechas, vías y contadores en Geist Mono con `tabular-nums`.
- **Deja** el contenido completo en el HTML: las animaciones solo giran o desplazan lo que ya está pintado; sin JS el detalle del panel está abierto, la secuencia de NIZZ está apilada y la línea, dibujada.
- **Da** a cada control al menos `spacing.tap` de alto con ratón y `spacing.tap-touch` (48 px) en ≤1023 px o con puntero grueso.
- **Respeta** `prefers-reduced-motion`: fuera desplazamientos, escalas y rebotes; se quedan los cambios de color y opacidad, y un fundido de 200 ms en la secuencia de NIZZ.
- **Separa** las secciones con bandas de fondo a ancho completo (blanco / niebla) con corte duro.
- **Tematiza** las superficies del navegador: selección y caret en Adif, scrollbar en riel, foco con anillo Adif de 2 px.

### Don't:
- **No pongas** hex, `rgb()` ni nombres de color sueltos en los componentes.
- **No uses** Geist Mono para palabras, URLs ni etiquetas para que algo parezca técnico.
- **No pintes** de ámbar nada estático ni pongas texto blanco sobre ámbar.
- **No rellenes** botones ni fondos de sección con azul Adif.
- **No pongas** etiquetas ni rótulos en mayúsculas encima de los títulos. La pastilla de estado del hero no es un rótulo: es el único indicador de disponibilidad en directo y no se replica.
- **No uses** el rebote (`--ease-spring`) fuera de las fichas del nombre y los segundos del reloj.
- **No combines** borde y sombra en un mismo contenedor ni pases de 16 px de radio en un contenedor.
- **No imites** la marca de NIZZ (teal, Bricolage Grotesque, bordes de 2 px, sombras duras desplazadas): vive solo dentro de sus capturas.
- **No montes** los proyectos como una rejilla de tarjetas iguales: son filas de un panel de salidas.
- **No pases** de -0.04em de tracking ni de 6rem en display.

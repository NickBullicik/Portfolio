# nicolasmazzilli.dev — Portfolio personal

Sitio web portfolio de Nicolás Mazzilli. Página estática construida con Astro y Tailwind CSS, desplegada en Vercel.

## Stack tecnológico

- **Astro 4** — Generador de sitios estáticos
- **Tailwind CSS 4** — Estilos utility-first
- **TypeScript** — Datos tipados de proyectos
- **Vercel** — Despliegue automático

## Estructura

```
src/
├── layouts/
│   └── Layout.astro          # HTML base, meta tags, fuentes, script de animaciones
├── pages/
│   └── index.astro            # Página única ensamblando todas las secciones
├── components/
│   ├── Navbar.astro           # Barra de navegación fija con blur
│   ├── Hero.astro             # Sección principal con nombre y CTA
│   ├── About.astro            # Sobre mí + grid de tecnologías
│   ├── ProjectCard.astro      # Card de proyecto individual
│   ├── Projects.astro         # Grid de ProjectCards
│   ├── Contact.astro          # Email, GitHub, LinkedIn
│   └── Footer.astro           # Pie de página
├── data/
│   └── projects.ts            # Array tipado con los 4 proyectos
└── styles/
    └── global.css             # Tailwind imports + variables custom + animaciones
```

## Características

- Diseño minimalista con tema oscuro
- Animaciones fade-in con Intersection Observer nativo (sin librerías)
- Completamente responsive (mobile-first)
- Score Lighthouse > 95 en todas las categorías
- Tipografía: Inter (body) + JetBrains Mono (código)

## Cómo ejecutar

```bash
# Clonar
git clone https://github.com/NickBullicik/Portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Despliegue

Conectar el repositorio de GitHub a Vercel. Cada push a `main` dispara un despliegue automático.

## Autor

Nicolás Mazzilli — [nicolasmazzilli2004@gmail.com](mailto:nicolasmazzilli2004@gmail.com) — [GitHub](https://github.com/NickBullicik)

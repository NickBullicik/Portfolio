export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Cortly",
    description: "Acortador de URLs con dashboard de analíticas. Muestra clics por día, navegador de origen y referencia de cada enlace.",
    image: "/images/projects/cortly.webp",
    tags: ["React", "Node.js", "Express", "SQLite", "Tailwind"],
    githubUrl: "https://github.com/NickBullicik/cortly"
  },
  {
    title: "DevRadar",
    description: "Analiza el mercado laboral tech en España. Ranking de tecnologías demandadas, salarios y distribución por provincia.",
    image: "/images/projects/devradar.webp",
    tags: ["TypeScript", "Cheerio", "React", "Recharts", "SQLite"],
    githubUrl: "https://github.com/NickBullicik/devradar"
  },
  {
    title: "Rachas",
    description: "App móvil para construir hábitos diarios y mantener rachas. Estadísticas semanales y animaciones con Material Design 3.",
    image: "/images/projects/rachas.webp",
    tags: ["Flutter", "Dart", "Provider", "fl_chart"],
    githubUrl: "https://github.com/NickBullicik/rachas"
  },
  {
    title: "Ordenly",
    description: "Herramienta de escritorio para organizar archivos. Renombrado en lote con previsualización, clasificación por tipo y reportes.",
    image: "/images/projects/ordenly.webp",
    tags: ["Java", "JavaFX", "Gradle"],
    githubUrl: "https://github.com/NickBullicik/ordenly"
  }
];

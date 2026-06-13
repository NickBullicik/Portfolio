export interface Project {
  title: string;
  description: { es: string; en: string };
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Cortly",
    description: {
      es: "Acortador de URLs con dashboard de analíticas. Muestra clics por día, navegador de origen y referencia de cada enlace.",
      en: "URL shortener with an analytics dashboard. Shows clicks per day, source browser and referrer for each link."
    },
    image: "/images/projects/cortly.webp",
    tags: ["React", "Node.js", "Express", "SQLite", "Tailwind"],
    githubUrl: "https://github.com/NickBullicik/cortly"
  },
  {
    title: "DevRadar",
    description: {
      es: "Analiza el mercado laboral tech en España. Ranking de tecnologías demandadas, salarios y distribución por provincia.",
      en: "Analyzes the tech job market in Spain. Ranking of in-demand technologies, salaries and distribution by province."
    },
    image: "/images/projects/devradar.webp",
    tags: ["TypeScript", "Cheerio", "React", "Recharts", "SQLite"],
    githubUrl: "https://github.com/NickBullicik/devradar"
  },
  {
    title: "Rachas",
    description: {
      es: "App móvil para construir hábitos diarios y mantener rachas. Estadísticas semanales y animaciones con Material Design 3.",
      en: "Mobile app to build daily habits and keep streaks alive. Weekly stats and smooth Material Design 3 animations."
    },
    image: "/images/projects/rachas.webp",
    tags: ["Flutter", "Dart", "Provider", "fl_chart"],
    githubUrl: "https://github.com/NickBullicik/rachas"
  },
  {
    title: "Ordenly",
    description: {
      es: "Herramienta de escritorio para organizar archivos. Renombrado en lote con previsualización, clasificación por tipo y reportes.",
      en: "Desktop tool to organize files. Batch renaming with live preview, classification by file type and directory reports."
    },
    image: "/images/projects/ordenly.webp",
    tags: ["Java", "JavaFX", "Gradle"],
    githubUrl: "https://github.com/NickBullicik/ordenly"
  }
];

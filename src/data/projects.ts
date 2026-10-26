import type { ImageMetadata } from 'astro';
import cortly from '../assets/shots/cortly-dashboard.png';
import devradar from '../assets/shots/devradar-charts.png';
import ordenly from '../assets/shots/ordenly-rename.png';

export type ProjectSlug = 'cortly' | 'devradar' | 'ordenly' | 'rachas';

export interface Project {
  slug: ProjectSlug;
  name: string;
  /** Mes y año de salida, como en un panel de estación (MM/AA). */
  date: string;
  via: number;
  tags: string[];
  github: string;
  image?: ImageMetadata;
  alt?: 'cortly' | 'devradar' | 'ordenly';
}

// NIZZ va aparte: es la vía 1 y tiene su propia sección.
export const projects: Project[] = [
  { slug: 'cortly', name: 'Cortly', date: '06/26', via: 2, tags: ['React', 'Node.js', 'SQLite'], github: 'https://github.com/NickBullicik/Cortly', image: cortly, alt: 'cortly' },
  { slug: 'devradar', name: 'DevRadar', date: '06/26', via: 3, tags: ['TypeScript', 'React', 'Node.js'], github: 'https://github.com/NickBullicik/DevRadar', image: devradar, alt: 'devradar' },
  { slug: 'ordenly', name: 'Ordenly', date: '06/26', via: 4, tags: ['Java', 'JavaFX'], github: 'https://github.com/NickBullicik/Ordenly', image: ordenly, alt: 'ordenly' },
  { slug: 'rachas', name: 'Rachas', date: '06/26', via: 5, tags: ['Flutter', 'Dart'], github: 'https://github.com/NickBullicik/Rachas' },
];

export const nizzTags = ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'];

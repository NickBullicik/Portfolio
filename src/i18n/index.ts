import { es, type Dict } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

const dicts: Record<Lang, Dict> = { es, en };

export const getDict = (lang: Lang): Dict => dicts[lang];

/** Sustituye los marcadores `{clave}` de un texto. */
export const fill = (text: string, values: Record<string, string>): string =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);

// Reglas del formulario de contacto, compartidas por el navegador y la función de servidor.

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type ContactError = 'name' | 'emailEmpty' | 'emailInvalid' | 'message';

export const LIMITS = { name: 100, email: 200, company: 120, messageMin: 10, messageMax: 4000 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalize(raw: Partial<Record<keyof ContactInput, unknown>>): ContactInput {
  const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
  return { name: text(raw.name), email: text(raw.email), company: text(raw.company), message: text(raw.message) };
}

export function validate(input: ContactInput): Partial<Record<keyof ContactInput, ContactError>> {
  const errors: Partial<Record<keyof ContactInput, ContactError>> = {};
  if (!input.name || input.name.length > LIMITS.name) errors.name = 'name';
  if (!input.email) errors.email = 'emailEmpty';
  else if (input.email.length > LIMITS.email || !EMAIL.test(input.email)) errors.email = 'emailInvalid';
  if (input.message.length < LIMITS.messageMin || input.message.length > LIMITS.messageMax) errors.message = 'message';
  if (input.company.length > LIMITS.company) input.company = input.company.slice(0, LIMITS.company);
  return errors;
}

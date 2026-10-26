import { normalize, validate, type ContactInput } from '../lib/contact';

type Field = HTMLInputElement | HTMLTextAreaElement;

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-form]');
  if (!form) return;
  // Con JS validamos con nuestros mensajes; sin JS se queda la validación del navegador.
  form.noValidate = true;

  const ts = form.querySelector<HTMLInputElement>('[data-ts]');
  if (ts) ts.value = String(Date.now());

  const send = form.querySelector<HTMLButtonElement>('[data-send]');
  const sendLabel = form.querySelector<HTMLElement>('[data-send-label]');
  const alert = form.querySelector<HTMLElement>('[data-form-alert]');
  const alertServer = form.querySelector<HTMLElement>('[data-alert-server]');
  const alertRate = form.querySelector<HTMLElement>('[data-alert-rate]');
  const done = form.querySelector<HTMLElement>('[data-form-done]');
  const again = form.querySelector<HTMLButtonElement>('[data-form-again]');
  if (!send || !sendLabel || !alert || !alertServer || !alertRate || !done || !again) return;

  const fields = {
    name: form.elements.namedItem('name') as Field,
    email: form.elements.namedItem('email') as Field,
    company: form.elements.namedItem('company') as Field,
    message: form.elements.namedItem('message') as Field,
  };
  const checked = ['name', 'email', 'message'] as const;

  const read = (): ContactInput =>
    normalize({ name: fields.name.value, email: fields.email.value, company: fields.company.value, message: fields.message.value });

  const show = (key: (typeof checked)[number], error: string | undefined) => {
    const el = fields[key];
    const hint = form.querySelector<HTMLElement>(`[data-error-for="${key}"]`);
    el.setAttribute('aria-invalid', String(Boolean(error)));
    if (!hint) return;
    if (key === 'email' && error) hint.textContent = error === 'emailInvalid' ? hint.dataset.invalid ?? '' : hint.dataset.empty ?? '';
    hint.hidden = !error;
  };

  const check = () => {
    const errors = validate(read());
    checked.forEach((key) => show(key, errors[key]));
    return errors;
  };

  // Tras el primer error, cada campo se corrige mientras se escribe.
  checked.forEach((key) =>
    fields[key].addEventListener('input', () => {
      if (fields[key].getAttribute('aria-invalid') === 'true') show(key, validate(read())[key]);
    }),
  );

  const setSending = (sending: boolean) => {
    send.disabled = sending;
    send.classList.toggle('is-sending', sending);
    sendLabel.textContent = sending ? form.dataset.sending ?? '' : sendLabel.dataset.idle ?? '';
  };

  const fail = (kind: 'server' | 'rate') => {
    setSending(false);
    alertServer.hidden = kind !== 'server';
    alertRate.hidden = kind !== 'rate';
    alert.hidden = false;
    if (kind === 'server') sendLabel.textContent = sendLabel.dataset.retry ?? '';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (send.disabled) return;
    const errors = check();
    const firstInvalid = checked.find((key) => errors[key]);
    if (firstInvalid) {
      fields[firstInvalid].focus();
      return;
    }
    alert.hidden = true;
    setSending(true);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (response.status === 429) return fail('rate');
      if (!response.ok) return fail('server');
      form.classList.add('is-done');
      done.hidden = false;
      done.focus();
    } catch {
      fail('server');
    }
  });

  again.addEventListener('click', () => {
    form.reset();
    if (ts) ts.value = String(Date.now());
    checked.forEach((key) => show(key, undefined));
    setSending(false);
    alert.hidden = true;
    done.hidden = true;
    form.classList.remove('is-done');
    fields.name.focus();
  });
}

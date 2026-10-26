// Aviso breve que también oye el lector de pantalla (role="status").
let timer: number | undefined;

export function showToast(key: 'copied' | 'copyFailed'): void {
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  if (!toast) return;
  toast.textContent = toast.dataset[key] ?? '';
  toast.classList.add('is-on');
  window.clearTimeout(timer);
  timer = window.setTimeout(() => toast.classList.remove('is-on'), 2000);
}

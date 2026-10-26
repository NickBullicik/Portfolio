// Movimiento del sitio. Todo el contenido es visible sin él: las animaciones solo giran o desplazan
// lo que ya está pintado. Las fichas y la línea usan la Web Animations API; GSAP con ScrollTrigger
// se descarga solo en escritorio y cuando la secuencia de NIZZ está a punto de entrar en pantalla.

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const fontsReady = () => (document.fonts ? document.fonts.ready : Promise.resolve());

const cssVar = (name: string, fallback: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

/** Momento firma: las fichas del nombre saltan renglón a renglón, rebotan y se asientan en la letra final. */
export async function initFlaps(): Promise<void> {
  const flaps = [...document.querySelectorAll<HTMLElement>('[data-flaps] .flap')];
  if (!flaps.length || reducedMotion()) return;
  await fontsReady();
  const settle = cssVar('--ease-spring', 'ease-out');
  const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

  flaps.forEach((flap, i) => {
    const final = flap.textContent ?? '';
    const total = 4 + (i % 8);
    let n = 0;
    let overlay: HTMLSpanElement | undefined;
    let char: HTMLSpanElement | undefined;
    const step = () => {
      // La ficha solo se tapa cuando le toca girar: hasta entonces se lee la letra final.
      if (!overlay || !char) {
        overlay = document.createElement('span');
        overlay.className = 'ov';
        char = document.createElement('span');
        overlay.append(char);
        flap.append(overlay);
      }
      n += 1;
      const last = n >= total;
      char.textContent = last ? final : letters[Math.floor(Math.random() * letters.length)];
      const flip = char.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }], {
        duration: last ? 280 : 60,
        easing: last ? settle : 'linear',
      });
      if (last) {
        const cover = overlay;
        flip.finished.catch(() => undefined).finally(() => cover.remove());
      } else {
        window.setTimeout(step, 62);
      }
    };
    window.setTimeout(step, 180 + i * 34);
  });
}

/** La línea de Cercanías avanza parada a parada la primera vez que entra en pantalla. */
export function initLine(): void {
  const fill = document.querySelector<HTMLElement>('[data-line-fill]');
  const line = document.querySelector<HTMLElement>('[data-line]');
  if (!fill || !line || reducedMotion()) return;
  const vertical = matchMedia('(max-width: 719px)').matches;
  // Entre 720 y 1023 px la línea no se dibuja.
  if (!vertical && !matchMedia('(min-width: 1024px)').matches) return;
  const axis = vertical ? 'scaleY' : 'scaleX';
  let first = true;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (first) {
        first = false;
        // Si ya está en pantalla o se ha pasado de largo (enlace a #contacto), se queda dibujada.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) observer.disconnect();
        else fill.style.transform = `${axis}(0)`;
        return;
      }
      if (!entry.isIntersecting) return;
      observer.disconnect();
      fill.animate([{ transform: `${axis}(0)` }, { transform: `${axis}(1)` }], { duration: 1100, easing: 'steps(4)' });
      fill.style.transform = '';
    },
    { rootMargin: '0px 0px -20% 0px' },
  );
  observer.observe(line);
}

/** NIZZ en escritorio: el móvil queda fijo y su pantalla cambia al ritmo de cada frase. */
export function initStory(): void {
  const story = document.querySelector<HTMLElement>('[data-story]');
  if (!story) return;
  const desktop = matchMedia('(min-width: 1024px)');
  const arm = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void mountStory(story);
      },
      { rootMargin: '100% 0px' },
    );
    observer.observe(story);
  };
  if (desktop.matches) {
    arm();
    return;
  }
  const onChange = () => {
    if (!desktop.matches) return;
    desktop.removeEventListener('change', onChange);
    arm();
  };
  desktop.addEventListener('change', onChange);
}

async function mountStory(story: HTMLElement): Promise<void> {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);
  const steps = [...story.querySelectorAll<HTMLElement>('.step')];
  const screens = [...story.querySelectorAll<HTMLImageElement>('[data-stage-screens] img')];
  const bars = [...story.querySelectorAll<HTMLElement>('[data-stage-progress] i')];

  gsap.matchMedia().add(
    { desktop: '(min-width: 1024px)', reduce: '(prefers-reduced-motion: reduce)' },
    (context) => {
      if (!context.conditions?.desktop) return;
      const reduce = Boolean(context.conditions.reduce);
      let current = 0;
      story.classList.add('is-live');
      gsap.set(screens, { opacity: 0, zIndex: 0 });
      gsap.set(screens[0], { opacity: 1, zIndex: 1 });

      const show = (next: number) => {
        if (next === current) return;
        const forward = next > current;
        const prev = screens[current];
        const incoming = screens[next];
        gsap.killTweensOf(screens);
        screens.forEach((s, i) => {
          if (i !== next && i !== current) gsap.set(s, { opacity: 0, zIndex: 0, clearProps: 'clipPath,filter,scale' });
        });
        gsap.set(prev, { zIndex: 1 });
        gsap.set(incoming, { zIndex: 2, opacity: 1 });
        if (reduce) {
          // Sin desplazamiento: un fundido corto mantiene el aviso de que la pantalla ha cambiado.
          gsap.fromTo(incoming, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power1.out' });
          gsap.set(prev, { opacity: 0, zIndex: 0, delay: 0.2 });
        } else {
          gsap.fromTo(
            incoming,
            { clipPath: forward ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', filter: 'blur(6px)', scale: 1.04 },
            { clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0px)', scale: 1, duration: 0.7, ease: 'expo.out' },
          );
          gsap.fromTo(
            prev,
            { scale: 1, opacity: 1 },
            {
              scale: 0.94,
              opacity: 0.5,
              duration: 0.5,
              ease: 'power2.out',
              onComplete: () => gsap.set(prev, { opacity: 0, scale: 1, zIndex: 0 }),
            },
          );
        }
        steps.forEach((s, i) => s.classList.toggle('is-active', i === next));
        bars.forEach((b, i) => {
          b.classList.toggle('is-on', i <= next);
          b.classList.toggle('is-current', i === next);
        });
        current = next;
      };

      steps.forEach((step, i) =>
        ScrollTrigger.create({
          trigger: step,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => show(i),
          onEnterBack: () => show(i),
        }),
      );

      return () => {
        story.classList.remove('is-live');
        steps.forEach((s, i) => s.classList.toggle('is-active', i === 0));
        gsap.set(screens, { clearProps: 'all' });
      };
    },
  );
}

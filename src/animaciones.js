import { useEffect } from 'react';

// Retraso de una animación de entrada, para escalonar elementos.
export const retraso = (ms) => ({ '--retraso': `${ms}ms` });

// Hace aparecer los elementos con [data-aparecer] cuando entran en pantalla,
// rellena el hilo del costado según cuánto se bajó y fija el menú al scrollear.
export function useAnimaciones() {
  useEffect(() => {
    const raiz = document.documentElement;
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let observador;
    let preparar;
    if (reducido || !('IntersectionObserver' in window)) {
      raiz.classList.remove('animado');
      preparar = (el) => el.classList.add('visible');
    } else {
      raiz.classList.add('animado');
      observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
              entrada.target.classList.add('visible');
              observador.unobserve(entrada.target);
            }
          });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0.05 },
      );
      preparar = (el) => !el.classList.contains('visible') && observador.observe(el);
    }
    document.querySelectorAll('[data-aparecer]').forEach(preparar);

    // Lo que se agrega después (por ejemplo, al editar con el servidor de desarrollo abierto)
    // también tiene que aparecer: si no, quedaría invisible para siempre.
    const nuevos = new MutationObserver((cambios) => {
      cambios.forEach((cambio) =>
        cambio.addedNodes.forEach((nodo) => {
          if (nodo.nodeType !== Node.ELEMENT_NODE) return;
          if (nodo.matches('[data-aparecer]')) preparar(nodo);
          nodo.querySelectorAll('[data-aparecer]').forEach(preparar);
        }),
      );
    });
    nuevos.observe(document.body, { childList: true, subtree: true });

    let pendiente = false;
    const alScrollear = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        const maximo = raiz.scrollHeight - window.innerHeight;
        raiz.style.setProperty('--progreso', maximo > 0 ? window.scrollY / maximo : 0);
        raiz.classList.toggle('scrolleado', window.scrollY > 40);
        pendiente = false;
      });
    };
    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
    window.addEventListener('resize', alScrollear);

    return () => {
      observador?.disconnect();
      nuevos.disconnect();
      window.removeEventListener('scroll', alScrollear);
      window.removeEventListener('resize', alScrollear);
    };
  }, []);
}

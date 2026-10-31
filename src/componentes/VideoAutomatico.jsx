import { useEffect, useRef, useState } from 'react';

// Video sin sonido que se reproduce solo mientras se ve en pantalla y se puede pausar.
// Con «reducir movimiento» activado no arranca solo: se reproduce con los controles.
export default function VideoAutomatico({ video }) {
  const referencia = useRef(null);
  const [pausado, setPausado] = useState(false);
  const [quieto] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const elemento = referencia.current;
    if (quieto || pausado || !('IntersectionObserver' in window)) {
      if (pausado) elemento.pause();
      return undefined;
    }
    const observador = new IntersectionObserver(([entrada]) => {
      if (entrada.isIntersecting) elemento.play().catch(() => {});
      else elemento.pause();
    });
    observador.observe(elemento);
    return () => observador.disconnect();
  }, [quieto, pausado]);

  return (
    <>
      <video
        ref={referencia}
        src={video.src}
        poster={video.poster}
        aria-label={video.alt}
        controls={quieto}
        muted
        loop
        playsInline
        preload="metadata"
      />
      {!quieto && (
        <button type="button" className="mono video__pausa" onClick={() => setPausado(!pausado)}>
          {pausado ? 'REPRODUCIR' : 'PAUSAR'}
        </button>
      )}
    </>
  );
}

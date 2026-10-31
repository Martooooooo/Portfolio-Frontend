import { useState } from 'react';
import tamanos from '../tamanos.json';

// Las versiones más chicas de una imagen (las genera `npm run imagenes`),
// para que cada pantalla baje solo el tamaño que necesita.
export function versiones(imagen) {
  const tamano = tamanos[imagen.src];
  if (!tamano || !imagen.sizes) return {};

  const [ruta, extension] = imagen.src.split(/\.(?=[^.]+$)/);
  const carpeta = ruta.replace(/[^/]+$/, 'tamanos/');
  const nombre = ruta.split('/').pop();
  const srcSet = [
    ...tamano.versiones.map((ancho) => `${carpeta}${nombre}-${ancho}.${extension} ${ancho}w`),
    `${imagen.src} ${tamano.ancho}w`,
  ].join(', ');
  return { srcSet, sizes: imagen.sizes };
}

// La imagen; si todavía no está, la de reemplazo o, si no hay, un recuadro que describe qué foto va ahí.
export function Imagen({ imagen, className = '' }) {
  const [fallos, setFallos] = useState(0);
  const actual = [imagen, imagen.reemplazo].filter(Boolean)[fallos];

  if (!actual) {
    return (
      <div className={`foto-pendiente ${className}`}>
        <span className="foto-pendiente__etiqueta">
          <span className="proximamente__punto" aria-hidden="true" />
          FOTO PENDIENTE
        </span>
        {imagen.pendiente && <span className="foto-pendiente__texto">{imagen.pendiente}</span>}
      </div>
    );
  }

  return (
    <img
      key={actual.src}
      src={actual.src}
      {...versiones(actual)}
      alt={actual.alt}
      className={className}
      loading={imagen.prioridad ? 'eager' : 'lazy'}
      fetchpriority={imagen.prioridad ? 'high' : undefined}
      decoding="async"
      draggable="false"
      onError={() => setFallos(fallos + 1)}
    />
  );
}

// Imagen que cubre su marco. Aparece con un barrido al entrar en pantalla
// (el barrido va en el velo interno para que el marco siga siendo detectable).
export default function Foto({ imagen, className = '', style, children }) {
  return (
    <div className={`foto ${className}`} data-aparecer="foto" style={style}>
      <div className="velo">
        <Imagen imagen={imagen} />
        {children}
      </div>
    </div>
  );
}

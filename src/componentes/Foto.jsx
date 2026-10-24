import { useState } from 'react';

// La imagen, o un recuadro que describe qué foto va ahí si todavía no está.
export function Imagen({ imagen, className = '' }) {
  const [fallo, setFallo] = useState(false);

  if (fallo) {
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
      src={imagen.src}
      alt={imagen.alt}
      className={className}
      loading="lazy"
      draggable="false"
      onError={() => setFallo(true)}
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

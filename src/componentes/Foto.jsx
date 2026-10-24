import { useState } from 'react';

// Imagen dentro de un marco. Con `recorte` reproduce el encuadre de Figma; sin él, cubre el marco.
export default function Foto({ imagen, className = '' }) {
  const [fallo, setFallo] = useState(false);
  const { src, alt, recorte } = imagen;

  return (
    <div className={`foto ${className}`}>
      {!fallo && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={recorte ? 'foto__img--recorte' : 'foto__img--cubre'}
          style={recorte}
          onError={() => setFallo(true)}
        />
      )}
    </div>
  );
}

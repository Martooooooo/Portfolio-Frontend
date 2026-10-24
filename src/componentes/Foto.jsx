import { useState } from 'react';

// Imagen que cubre su marco. Aparece con un barrido al entrar en pantalla
// (el barrido va en el velo interno para que el marco siga siendo detectable).
export default function Foto({ imagen, className = '', style }) {
  const [fallo, setFallo] = useState(false);

  return (
    <div className={`foto ${className}`} data-aparecer="foto" style={style}>
      <div className="velo">
        {!fallo && (
          <img src={imagen.src} alt={imagen.alt} loading="lazy" onError={() => setFallo(true)} />
        )}
      </div>
    </div>
  );
}

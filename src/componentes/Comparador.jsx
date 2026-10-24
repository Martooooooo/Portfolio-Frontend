import { useRef, useState } from 'react';
import { Imagen } from './Foto.jsx';

// Dos imágenes encimadas: se arrastra la línea para pasar de una a otra.
// Con el teclado se mueve con el control deslizante (oculto a la vista).
export default function Comparador({ antes, despues, etiquetaAntes, etiquetaDespues }) {
  const [posicion, setPosicion] = useState(50);
  const marco = useRef(null);
  const arrastrando = useRef(false);

  const moverA = (x) => {
    const { left, width } = marco.current.getBoundingClientRect();
    setPosicion(Math.min(100, Math.max(0, ((x - left) / width) * 100)));
  };

  return (
    <div
      ref={marco}
      className="comparador"
      data-aparecer="subir"
      style={{ '--pos': `${posicion}%` }}
      onPointerDown={(e) => {
        arrastrando.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moverA(e.clientX);
      }}
      onPointerMove={(e) => arrastrando.current && moverA(e.clientX)}
      onPointerUp={() => (arrastrando.current = false)}
      onPointerCancel={() => (arrastrando.current = false)}
    >
      <div className="comparador__capa comparador__capa--despues">
        <Imagen imagen={despues} />
      </div>
      <div className="comparador__capa comparador__capa--antes">
        <Imagen imagen={antes} />
      </div>

      <span className="comparador__etiqueta comparador__etiqueta--antes">{etiquetaAntes}</span>
      <span className="comparador__etiqueta comparador__etiqueta--despues">{etiquetaDespues}</span>

      <div className="comparador__linea" aria-hidden="true">
        <span className="comparador__manija">↔</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(posicion)}
        onChange={(e) => setPosicion(Number(e.target.value))}
        className="comparador__control"
        aria-label={`Comparar: ${etiquetaAntes} y ${etiquetaDespues}`}
      />
    </div>
  );
}

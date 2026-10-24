import { IMAGENES } from '../datos.js';

// Marca de Sirena AI: la ilustración y el nombre sobre fondo claro.
export default function MarcaSirena({ className = '', style }) {
  return (
    <div className={`marca-sirena ${className}`} data-aparecer="foto" style={style}>
      <div className="velo marca-sirena__velo">
        <img src={IMAGENES.sirena.src} alt="" className="marca-sirena__ilustracion" />
        <span className="marca-sirena__nombre">Sirena AI</span>
      </div>
    </div>
  );
}

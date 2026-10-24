import { retraso } from '../animaciones.js';

// Lugar reservado para una imagen que todavía no está.
export function ImagenProximamente({ texto, className = '', demora = 0 }) {
  return (
    <div className={`proximamente ${className}`} data-aparecer="subir" style={retraso(demora)}>
      <div className="proximamente__estado">
        <span className="proximamente__etiqueta">
          <span className="proximamente__punto" aria-hidden="true" />
          PRÓXIMAMENTE
        </span>
        <span className="proximamente__mas" aria-hidden="true">
          ＋
        </span>
      </div>
      <p className="proximamente__texto">{texto}</p>
    </div>
  );
}

// Texto que todavía falta escribir.
export function TextoProximamente({ children, className = '', demora = 0 }) {
  return (
    <p className={`mono pendiente ${className}`} data-aparecer="subir" style={retraso(demora)}>
      PRÓXIMAMENTE / {children}
    </p>
  );
}

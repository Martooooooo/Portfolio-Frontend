import { retraso } from '../animaciones.js';

// Texto que todavía falta escribir.
export function TextoProximamente({ children, className = '', demora = 0 }) {
  return (
    <p className={`mono pendiente ${className}`} data-aparecer="subir" style={retraso(demora)}>
      PRÓXIMAMENTE / {children}
    </p>
  );
}

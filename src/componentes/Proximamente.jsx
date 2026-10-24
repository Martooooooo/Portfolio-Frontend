// Lugar reservado para una imagen que todavía no está.
export function ImagenProximamente({ texto, className = '' }) {
  return (
    <div className={`proximamente ${className}`}>
      <div className="proximamente__estado">
        <span>PRÓXIMAMENTE</span>
        <span className="proximamente__mas" aria-hidden="true">
          ＋
        </span>
      </div>
      <p className="proximamente__texto">{texto}</p>
    </div>
  );
}

// Texto que todavía falta escribir.
export function TextoProximamente({ children, className = '' }) {
  return <p className={`mono pendiente ${className}`}>PRÓXIMAMENTE / {children}</p>;
}

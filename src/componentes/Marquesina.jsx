// Cinta de texto que se desplaza sin fin. Es decorativa: el contenido se repite en la página.
export default function Marquesina({ items, className = '' }) {
  const tramo = (
    <span className="marquesina__tramo">
      {items.map((item) => (
        <span key={item}>
          {item}
          <span className="marquesina__separador">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`marquesina ${className}`} aria-hidden="true">
      <div className="marquesina__pista">
        {tramo}
        {tramo}
      </div>
    </div>
  );
}

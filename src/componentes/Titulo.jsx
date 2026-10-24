// Título que aparece renglón por renglón, cada uno subiendo desde abajo.
export default function Titulo({ como: Etiqueta = 'h2', lineas, className = '' }) {
  return (
    <Etiqueta className={`titulo ${className}`} data-aparecer="titulo">
      {lineas.map((linea, i) => (
        <span className="renglon" key={i}>
          <span className="renglon__texto" style={{ '--i': i }}>
            {linea}
          </span>
        </span>
      ))}
    </Etiqueta>
  );
}

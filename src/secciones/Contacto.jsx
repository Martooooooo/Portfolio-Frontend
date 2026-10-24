import { CONTACTO } from '../datos.js';

export default function Contacto() {
  const contenido = (
    <>
      <span>Hablemos</span>
      <span className="contacto__flecha" aria-hidden="true">
        ↗
      </span>
    </>
  );

  return (
    <section className="seccion contacto" id="contacto">
      <hr className="separador" />
      <p className="capitulo color-naranja">08 / LA HISTORIA SIGUE</p>
      <div className="contacto__cuerpo">
        <h2 className="titulo contacto__titulo">
          PROYECTOS,
          <br />
          BÁSQUET
          <br />Y LO QUE VIENE.
        </h2>
        <div className="contacto__invitacion">
          <p className="relato">
            De aquel proyecto de 3.º a Sirena. De Sirena a este lado más personal. Gracias por
            llegar hasta acá. Si algo de esta historia te hizo conectar, hablemos.
          </p>
          {CONTACTO ? (
            <a href={CONTACTO} className="contacto__enlace">
              {contenido}
            </a>
          ) : (
            <div className="contacto__enlace">{contenido}</div>
          )}
          {!CONTACTO && <p className="epigrafe">PRÓXIMAMENTE / Mi mail o enlace de contacto.</p>}
        </div>
      </div>
      <footer className="mono pie">
        <span>UNA HISTORIA PERSONAL / SIRENA → BÁSQUET</span>
        <a href="#inicio" className="color-durazno">
          VOLVER AL COMIENZO ↑
        </a>
      </footer>
    </section>
  );
}

import Titulo from '../componentes/Titulo.jsx';
import { CONTACTO, NOMBRE, REDES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Contacto() {
  const contenido = (
    <>
      <span>Hablemos</span>
      <span className="contacto__flecha" aria-hidden="true">
        ↗
      </span>
    </>
  );
  const redes = REDES.filter((red) => red.url);

  return (
    <section className="seccion contacto" id="contacto">
      <hr className="separador" data-aparecer="linea" />
      <p className="capitulo color-naranja" data-aparecer="subir">
        08 / LA HISTORIA SIGUE
      </p>
      <div className="contacto__cuerpo">
        <Titulo className="contacto__titulo" lineas={['PROYECTOS,', 'BÁSQUET', 'Y LO QUE VIENE.']} />
        <div className="contacto__invitacion">
          <p className="relato" data-aparecer="subir" style={retraso(300)}>
            De aquel proyecto de 3.º a Sirena. De Sirena a la cancha. Gracias por llegar hasta acá.
            Si algo de esta historia te hizo conectar, hablemos.
          </p>
          {CONTACTO ? (
            <a href={CONTACTO} className="contacto__enlace" data-aparecer="subrayado" style={retraso(450)}>
              {contenido}
            </a>
          ) : (
            <div className="contacto__enlace" data-aparecer="subrayado" style={retraso(450)}>
              {contenido}
            </div>
          )}
          {!CONTACTO && (
            <p className="epigrafe" data-aparecer="subir" style={retraso(600)}>
              PRÓXIMAMENTE / Mi mail o enlace de contacto.
            </p>
          )}
          {redes.length > 0 && (
            <ul className="redes" data-aparecer="subir" style={retraso(650)}>
              {redes.map((red) => (
                <li key={red.nombre}>
                  <a href={red.url} target="_blank" rel="noreferrer" className="mono redes__enlace">
                    {red.nombre} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <footer className="mono pie" data-aparecer="subir">
        <span>
          {NOMBRE.toUpperCase()} / SIRENA → BÁSQUET / {new Date().getFullYear()}
        </span>
        <a href="#inicio" className="pie__volver">
          VOLVER AL COMIENZO ↑
        </a>
      </footer>
    </section>
  );
}

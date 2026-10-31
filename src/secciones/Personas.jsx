import Foto from '../componentes/Foto.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

// Las fotos del equipo de Sirena, todas juntas.
export default function Personas() {
  return (
    <section className="seccion personas">
      <figure className="personas__archivo">
        <Foto imagen={IMAGENES.parqueInnovacion} className="foto--parque" />
        <Foto imagen={IMAGENES.equipoSirena} className="foto--equipo-sirena personas__inserto" style={retraso(300)} />
        <figcaption className="epigrafe" data-aparecer="subir" style={retraso(250)}>
          PARQUE DE LA INNOVACIÓN / LA PRIMERA VEZ FUERA DEL COLEGIO.
        </figcaption>
      </figure>
      <div className="personas__texto">
        <Titulo className="personas__titulo" lineas={['TAMBIÉN', 'ME QUEDO CON', 'LAS PERSONAS.']} />
        <p className="relato" data-aparecer="subir" style={retraso(300)}>
          Sirena la hicimos en equipo. Detrás de cada versión, de cada charla y de cada presentación
          hubo personas, y eso es lo que más me llevo de esta etapa. En la TIC Experience nos conoció
          el CEO del Parque de la Innovación y nos invitó a presentar Sirena ahí: fue la primera vez
          que la mostramos fuera del colegio.
        </p>
        <div className="personas__pausa" data-aparecer="linea" style={retraso(400)} aria-hidden="true" />
        <blockquote className="personas__anecdota" data-aparecer="subir" style={retraso(500)}>
          <p>
            En 5.º casi dejamos el proyecto. A último momento decidimos retomarlo, porque alguien de
            Unitree, la empresa de robótica, nos dijo que estaba bueno y nos motivó a seguir. Es el
            mismo de la foto de la primera vez que presentamos Sirena, en el colegio.
          </p>
          <footer className="mono">LA VEZ QUE CASI LARGAMOS</footer>
        </blockquote>
      </div>

      <div className="personas__fila">
        <figure className="personas__pieza">
          <Foto imagen={IMAGENES.aula} className="foto--aula" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EL EQUIPO / PRESENTANDO EN EL AULA.
          </figcaption>
        </figure>
        <figure className="personas__pieza">
          <Foto imagen={IMAGENES.ticNoche} className="foto--noche" style={retraso(150)} />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(250)}>
            PARQUE DE LA INNOVACIÓN / CUANDO SE HIZO DE NOCHE.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

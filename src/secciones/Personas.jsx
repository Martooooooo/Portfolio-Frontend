import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Personas() {
  return (
    <section className="seccion personas">
      <figure className="personas__archivo">
        <Foto imagen={IMAGENES.encuentro} className="foto--encuentro" />
        <Foto imagen={IMAGENES.equipoSirena} className="foto--equipo-sirena personas__inserto" style={retraso(300)} />
        <figcaption className="epigrafe" data-aparecer="subir" style={retraso(250)}>
          PARTE DEL ARCHIVO / PERSONAS Y MOMENTOS COMPARTIDOS.
        </figcaption>
      </figure>
      <div className="personas__texto">
        <p className="capitulo color-arena" data-aparecer="subir">
          05 / LO QUE NO ES UNA PANTALLA
        </p>
        <Titulo className="personas__titulo" lineas={['TAMBIÉN', 'ME QUEDO CON', 'LAS PERSONAS.']} />
        <p className="relato" data-aparecer="subir" style={retraso(300)}>
          No quiero contar esta etapa solo desde el proyecto. También quiero dejar lugar para las
          personas y las experiencias: esa parte más humana que una captura no alcanza a mostrar.
        </p>
        <div className="personas__pausa" data-aparecer="linea" style={retraso(400)} aria-hidden="true" />
        <TextoProximamente className="texto-12 personas__pendiente" demora={500}>
          Una anécdota real de este encuentro y quiénes me acompañaron.
        </TextoProximamente>
      </div>
    </section>
  );
}

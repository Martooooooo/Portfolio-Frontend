import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import { IMAGENES } from '../datos.js';

export default function Personas() {
  return (
    <section className="seccion personas">
      <figure className="personas__archivo">
        <Foto imagen={IMAGENES.encuentro} className="foto--encuentro" />
        <figcaption className="epigrafe">PARTE DEL ARCHIVO / PERSONAS Y MOMENTOS COMPARTIDOS.</figcaption>
      </figure>
      <div className="personas__texto">
        <p className="capitulo color-arena">05 / LO QUE NO ES UNA PANTALLA</p>
        <h2 className="titulo personas__titulo">
          TAMBIÉN
          <br />
          ME QUEDO CON
          <br />
          LAS PERSONAS.
        </h2>
        <p className="relato">
          No quiero contar esta etapa solo desde el proyecto. También quiero dejar lugar para las
          personas y las experiencias: esa parte más humana que una captura no alcanza a mostrar.
        </p>
        <div className="personas__pausa" aria-hidden="true" />
        <TextoProximamente className="texto-12 personas__pendiente">
          Una anécdota real de este encuentro y quiénes me acompañaron.
        </TextoProximamente>
      </div>
    </section>
  );
}

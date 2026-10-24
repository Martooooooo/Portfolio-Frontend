import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import { IMAGENES } from '../datos.js';

export default function MasQueUnaNota() {
  return (
    <section className="seccion nota">
      <p className="capitulo color-verde">04 / LO QUE ME QUEDÓ</p>
      <h2 className="titulo nota__titulo">
        LA NOTA ERA UNA PARTE.
        <br />
        <span className="color-verde">PARA MÍ, YA ERA MUCHO MÁS.</span>
      </h2>
      <div className="nota__cuerpo">
        <figure className="nota__pieza">
          <Foto imagen={IMAGENES.emprender} className="foto--emprender" />
          <figcaption className="epigrafe">UNA IDEA QUE ACOMPAÑA ESTA HISTORIA.</figcaption>
        </figure>
        <div className="nota__reflexion">
          <p className="relato">
            Lo que me importa contar de Sirena no entra en una calificación. El cambio fue empezar a
            mirar un proyecto como algo propio, no solamente como una consigna.
          </p>
          <TextoProximamente className="texto-12">
            El momento en que sentí que Sirena dejó de ser solo una entrega.
          </TextoProximamente>
        </div>
      </div>
    </section>
  );
}

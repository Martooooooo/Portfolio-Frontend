import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function MasQueUnaNota() {
  return (
    <section className="seccion nota">
      <p className="capitulo color-verde" data-aparecer="subir">
        04 / LO QUE ME QUEDÓ
      </p>
      <Titulo
        className="nota__titulo"
        lineas={['LA NOTA ERA UNA PARTE.', <span className="color-verde">PARA MÍ, YA ERA MUCHO MÁS.</span>]}
      />
      <div className="nota__cuerpo">
        <figure className="nota__pieza">
          <Foto imagen={IMAGENES.presentando} className="foto--presentando" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EL DÍA QUE SIRENA DEJÓ DE SER UNA ENTREGA.
          </figcaption>
        </figure>
        <div className="nota__reflexion">
          <p className="relato" data-aparecer="subir" style={retraso(150)}>
            Lo que me importa contar de Sirena no entra en una calificación. El cambio fue empezar a
            mirar un proyecto como algo propio, no solamente como una consigna.
          </p>
          <TextoProximamente className="texto-12" demora={300}>
            El momento en que sentí que Sirena dejó de ser solo una entrega.
          </TextoProximamente>
          <Foto imagen={IMAGENES.emprender} className="foto--emprender" style={retraso(350)} />
        </div>
      </div>
    </section>
  );
}

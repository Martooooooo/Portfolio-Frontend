import Foto from '../componentes/Foto.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function MasQueUnaNota() {
  return (
    <section className="seccion nota">
      <p className="capitulo color-verde" data-aparecer="subir">
        05 / LO QUE ME QUEDÓ
      </p>
      <Titulo
        className="nota__titulo"
        lineas={['LA NOTA ERA UNA PARTE.', <span className="color-verde">PARA MÍ, YA ERA MUCHO MÁS.</span>]}
      />
      <div className="nota__cuerpo">
        <figure className="nota__pieza">
          <Foto imagen={IMAGENES.ticEntrevista} className="foto--presentando" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EL DÍA QUE SIRENA DEJÓ DE SER UNA ENTREGA.
          </figcaption>
        </figure>
        <div className="nota__reflexion">
          <p className="relato" data-aparecer="subir" style={retraso(150)}>
            Lo que me importa contar de Sirena no entra en una calificación. El cambio fue empezar a
            mirar un proyecto como algo propio, no solamente como una consigna.
          </p>
          <p className="relato color-texto" data-aparecer="subir" style={retraso(250)}>
            Pasó en 5.º. En 4.º Sirena predecía por departamento, para toda la Argentina, y nos dimos
            cuenta de que así no era precisa: nunca se inunda un departamento entero. Decidimos
            retomarla con otro foco, hectárea por hectárea, y ahí empezamos a crecer de verdad.
          </p>

          {/* De la idea de 4.º a la Sirena de hoy. */}
          <dl className="versiones" data-aparecer="subir" style={retraso(350)}>
            <div className="version">
              <dt className="mono">4.º · LA IDEA</dt>
              <dd>Una predicción por departamento, para toda la Argentina.</dd>
            </div>
            <div className="version version--hoy">
              <dt className="mono">5.º · SIRENA HOY</dt>
              <dd>Una predicción hectárea por hectárea.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

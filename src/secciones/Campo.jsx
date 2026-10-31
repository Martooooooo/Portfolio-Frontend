import Foto from '../componentes/Foto.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

// Todo lo de «Emprender como forma de aprender»: las charlas que dimos en el campo.
export default function Campo() {
  const video = IMAGENES.expoEntrevista;

  return (
    <section className="seccion campo" id="campo">
      <div className="campo__encabezado">
        <Titulo className="campo__titulo" lineas={['SIRENA SALIÓ', <span className="color-verde">AL CAMPO.</span>]} />
        <p className="relato" data-aparecer="subir" style={retraso(250)}>
          Gracias a Sirena salimos del aula y fuimos a la Expo Rural de 9 de Julio, a contar que
          emprender también es una forma de aprender.
        </p>
      </div>

      {/* Cuadros alternados: el video con el escenario al lado y, debajo, el Ateneo con la charla. */}
      <div className="campo__galeria">
        <figure className="campo__pieza campo__pieza--ancha">
          <div className="foto foto--video" data-aparecer="foto">
            <div className="velo">
              <video src={video.src} poster={video.poster} aria-label={video.alt} controls playsInline preload="none" />
            </div>
          </div>
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EXPO RURAL / CONTANDO SIRENA FRENTE A CÁMARA.
          </figcaption>
        </figure>

        <figure className="campo__pieza">
          <Foto imagen={IMAGENES.expoEscenario} className="foto--alta foto--escenario" style={retraso(150)} />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(250)}>
            EXPO RURAL / EMPRENDER COMO FORMA DE APRENDER.
          </figcaption>
        </figure>

        <figure className="campo__pieza">
          <Foto imagen={IMAGENES.encuentro} className="foto--alta foto--encuentro" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            ATENEO / SOCIEDAD RURAL DE NUEVE DE JULIO.
          </figcaption>
        </figure>

        <figure className="campo__pieza campo__pieza--ancha">
          <Foto imagen={IMAGENES.expoCharla} className="foto--charla" style={retraso(150)} />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(250)}>
            LA CHARLA / EN LA TRANSMISIÓN DE SUMA PLAY.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

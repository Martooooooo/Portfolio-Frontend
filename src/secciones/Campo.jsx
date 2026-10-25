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
        <div className="campo__intro">
          <p className="capitulo color-verde" data-aparecer="subir">
            04 / AL CAMPO
          </p>
          <Titulo className="campo__titulo" lineas={['SIRENA SALIÓ', <span className="color-verde">AL CAMPO.</span>]} />
        </div>
        <div className="campo__lema">
          <p className="relato" data-aparecer="subir" style={retraso(250)}>
            Con Sirena salimos del aula y fuimos al campo: dimos charlas en la Expo Rural para contar que
            emprender también es una forma de aprender.
          </p>
          <Foto imagen={IMAGENES.emprender} className="foto--emprender" style={retraso(350)} />
        </div>
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

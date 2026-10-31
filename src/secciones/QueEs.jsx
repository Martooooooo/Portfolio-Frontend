import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { DATOS_SIRENA, IMAGENES, MI_APORTE, PASOS_SIRENA, SIRENA_URL, STACK_SIRENA } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function QueEs() {
  return (
    <section className="seccion que-es" id="sirena">
      <div className="que-es__cuerpo">
        <div className="que-es__descripcion">
          <Titulo className="que-es__nombre" lineas={['SIRENA.']} />
          <p className="que-es__definicion" data-aparecer="subir" style={retraso(150)}>
            Predicción de inundaciones
            <br />
            con inteligencia artificial.
          </p>
          <p className="relato" data-aparecer="subir" style={retraso(250)}>
            Arrancó en 4.º para aprobar la materia y en 5.º decidimos profesionalizarla, hectárea por
            hectárea. Para mí, Sirena marca la diferencia entre hacer algo para entregar y construir
            algo que siento que importa.
          </p>
          {MI_APORTE ? (
            <div className="que-es__aporte" data-aparecer="subir" style={retraso(350)}>
              <span className="mono color-verde">MI PARTE</span>
              <p className="relato">{MI_APORTE}</p>
              <dl className="stack">
                {STACK_SIRENA.filter(([, valor]) => valor).map(([capa, valor]) => (
                  <div key={capa}>
                    <dt className="mono">{capa}</dt>
                    <dd>{valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : (
            <TextoProximamente demora={350}>Qué hice yo en Sirena.</TextoProximamente>
          )}
          <a href={SIRENA_URL} target="_blank" rel="noreferrer" className="boton boton--verde" data-aparecer="subir" style={retraso(450)}>
            <span>Visitar Sirena</span>
            <span className="boton__flecha" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <figure className="que-es__visual">
          <Foto imagen={IMAGENES.standSirena} className="foto--presentacion" style={retraso(150)} />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(300)}>
            LA PRIMERA VEZ QUE LA PRESENTAMOS, EN EL COLEGIO / CON ALGUIEN DE UNITREE.
          </figcaption>
        </figure>
      </div>

      {/* Las cifras que definen a Sirena hoy. */}
      <ul className="cifras">
        {DATOS_SIRENA.map((dato, i) => (
          <li className="cifra" key={dato.cifra} data-aparecer="subir" style={retraso(i * 100)}>
            <strong className="cifra__valor">{dato.cifra}</strong>
            <span className="cifra__texto">{dato.texto}</span>
          </li>
        ))}
      </ul>

      <ol className="pasos">
        {PASOS_SIRENA.map((paso, i) => (
          <li className="paso" key={paso.titulo} data-aparecer="subir" style={retraso(i * 140)}>
            <Foto imagen={paso.imagen} className="foto--paso" style={retraso(200 + i * 140)} />
            <span className="paso__numero">0{i + 1}</span>
            <h3 className="paso__titulo">{paso.titulo}</h3>
            <p className="paso__texto">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

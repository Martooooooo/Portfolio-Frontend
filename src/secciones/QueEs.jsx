import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES, MI_APORTE, PASOS_SIRENA } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function QueEs() {
  return (
    <section className="seccion que-es" id="sirena">
      <div className="que-es__cuerpo">
        <div className="que-es__descripcion">
          <p className="capitulo color-verde" data-aparecer="subir">
            03 / EL PROYECTO
          </p>
          <Titulo className="que-es__nombre" lineas={['SIRENA.']} />
          <p className="que-es__definicion" data-aparecer="subir" style={retraso(150)}>
            Predicción de inundaciones
            <br />
            con inteligencia artificial.
          </p>
          <p className="relato" data-aparecer="subir" style={retraso(250)}>
            Ese fue el desafío de 4.º año. Para mí, Sirena marca la diferencia entre hacer algo para
            entregar y construir algo que siento que importa.
          </p>
          {MI_APORTE ? (
            <div className="que-es__aporte" data-aparecer="subir" style={retraso(350)}>
              <span className="mono color-verde">MI PARTE</span>
              <p className="relato">{MI_APORTE}</p>
            </div>
          ) : (
            <TextoProximamente demora={350}>Qué hice yo en Sirena.</TextoProximamente>
          )}
        </div>

        <figure className="que-es__visual">
          <Foto imagen={IMAGENES.sirenaProceso} className="foto--proceso" style={retraso(150)} />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(300)}>
            DETRÁS DE SIRENA / LAS HORAS QUE NO SE VEN.
          </figcaption>
        </figure>
      </div>

      <ol className="pasos">
        {PASOS_SIRENA.map((paso, i) => (
          <li className="paso" key={paso.titulo} data-aparecer="subir" style={retraso(i * 140)}>
            <span className="paso__numero">0{i + 1}</span>
            <h3 className="paso__titulo">{paso.titulo}</h3>
            <p className="paso__texto">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

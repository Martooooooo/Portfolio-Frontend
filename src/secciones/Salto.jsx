import Titulo from '../componentes/Titulo.jsx';
import VideoAutomatico from '../componentes/VideoAutomatico.jsx';
import { IMAGENES, SALTO } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Salto() {
  return (
    <section className="seccion salto" id="el-salto">
      <Titulo className="salto__titulo" lineas={['DE CUMPLIR CON LA ENTREGA', 'A QUERER IR MÁS ALLÁ.']} />

      {/* El 4 chico y apagado, el 5 grande y encendido: el salto se ve antes de leerlo. */}
      <div className="brinco" data-aparecer="arco">
        <div className="brinco__anio brinco__anio--antes">
          <span className="brinco__numero">4.º</span>
          <span className="mono">PARA APROBAR LA MATERIA, IGUAL QUE EN 3.º</span>
        </div>
        <div className="brinco__medio" aria-hidden="true">
          <span className="mono brinco__rotulo">EL SALTO</span>
          <svg className="brinco__arco" viewBox="0 0 400 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="brinco-degrade" x1="0" x2="1">
                <stop offset="0" stopColor="#b8c2c6" stopOpacity="0.35" />
                <stop offset="1" stopColor="#2ec4d6" />
              </linearGradient>
            </defs>
            <path d="M6 134 C 110 -30, 290 -30, 394 40" />
          </svg>
        </div>
        <div className="brinco__anio brinco__anio--despues">
          <span className="brinco__numero">5.º</span>
          <span className="mono">DECIDIMOS PROFESIONALIZAR SIRENA</span>
        </div>
      </div>

      {/* Lo que salió del salto: el flujo de Sirena en video, dentro de una ventana de navegador. */}
      <figure className="salto__pantallas">
        <div className="pantalla" data-aparecer="subir">
          <div className="pantalla__barra" aria-hidden="true">
            <span className="pantalla__puntos">
              <span />
              <span />
              <span />
            </span>
            <span className="mono pantalla__url">sirena-ai.com.ar</span>
            <span className="pantalla__etiqueta">SIRENA HOY</span>
          </div>
          <div className="foto foto--pantalla" data-aparecer="foto" style={retraso(150)}>
            <div className="velo">
              <VideoAutomatico video={IMAGENES.sirenaFlujo} />
            </div>
          </div>
        </div>
        <figcaption className="epigrafe salto__pista" data-aparecer="subir" style={retraso(250)}>
          ASÍ FUNCIONA SIRENA HOY: MARCÁS TU CAMPO, LA IA PREDICE EL RIESGO Y TE LLEGA LA ALERTA. /{' '}
          <a href="https://www.sirena-ai.com.ar/" target="_blank" rel="noreferrer" className="salto__enlace">
            SIRENA-AI.COM.AR ↗
          </a>
        </figcaption>
      </figure>

      <div className="tabla" role="table" aria-label="Comparación entre los proyectos de 3.º y 4.º año y Sirena en 5.º">
        <div className="tabla__fila tabla__fila--cabecera mono" role="row" data-aparecer="subir">
          <span role="columnheader" className="tabla__tema" />
          <span role="columnheader">3.º Y 4.º</span>
          <span role="columnheader" className="color-celeste">
            5.º · SIRENA
          </span>
        </div>
        {SALTO.map((fila, i) => (
          <div className="tabla__fila" role="row" key={fila.tema} data-aparecer="subir" style={retraso(100 + i * 90)}>
            <span role="rowheader" className="mono tabla__tema">
              {fila.tema}
            </span>
            <span role="cell" className="tabla__antes" data-etiqueta="3.º y 4.º">
              {fila.antes}
            </span>
            <span role="cell" className="tabla__despues" data-etiqueta="5.º">
              {fila.despues}
            </span>
          </div>
        ))}
      </div>

      <Titulo
        como="p"
        className="salto__cierre"
        lineas={['LA DIFERENCIA NO FUE SABER MÁS.', <span className="color-celeste">FUE QUE ESTA VEZ ME IMPORTABA.</span>]}
      />
    </section>
  );
}

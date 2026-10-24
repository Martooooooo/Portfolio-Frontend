import Comparador from '../componentes/Comparador.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES, SALTO } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Salto() {
  return (
    <section className="seccion salto" id="el-salto">
      <div className="salto__encabezado">
        <p className="capitulo color-celeste" data-aparecer="subir">
          02 / EL SALTO
        </p>
        <Titulo className="salto__titulo" lineas={['DE CUMPLIR CON LA ENTREGA', 'A QUERER IR MÁS ALLÁ.']} />
      </div>

      {/* El 3 chico y apagado, el 4 grande y encendido: el salto se ve antes de leerlo. */}
      <div className="brinco" data-aparecer="arco">
        <div className="brinco__anio brinco__anio--antes">
          <span className="brinco__numero">3.º</span>
          <span className="mono">UNA ENTREGA Y NADA MÁS</span>
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
          <span className="brinco__numero">4.º</span>
          <span className="mono">SIRENA · PREDICCIÓN DE INUNDACIONES CON IA</span>
        </div>
      </div>

      <div className="salto__pantallas">
        <Comparador
          antes={IMAGENES.proyecto3ro}
          despues={IMAGENES.sirenaApp}
          etiquetaAntes="3.º · EL PROYECTO DEL COLE"
          etiquetaDespues="4.º · SIRENA"
        />
        <p className="epigrafe salto__pista" data-aparecer="subir" style={retraso(200)}>
          ← ARRASTRÁ PARA VER EL SALTO →
        </p>
      </div>

      <div className="tabla" role="table" aria-label="Comparación entre 3.º y 4.º año">
        <div className="tabla__fila tabla__fila--cabecera mono" role="row" data-aparecer="subir">
          <span role="columnheader" className="tabla__tema" />
          <span role="columnheader">3.º AÑO</span>
          <span role="columnheader" className="color-celeste">
            4.º AÑO · SIRENA
          </span>
        </div>
        {SALTO.map((fila, i) => (
          <div className="tabla__fila" role="row" key={fila.tema} data-aparecer="subir" style={retraso(100 + i * 90)}>
            <span role="rowheader" className="mono tabla__tema">
              {fila.tema}
            </span>
            <span role="cell" className="tabla__antes" data-etiqueta="3.º">
              {fila.antes}
            </span>
            <span role="cell" className="tabla__despues" data-etiqueta="4.º">
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

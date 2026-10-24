import MarcaSirena from '../componentes/MarcaSirena.jsx';
import { ImagenProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
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

      <div className="salto__comparacion">
        <div className="salto__columna salto__columna--antes">
          <div className="salto__anio" data-aparecer="subir">
            <span className="salto__numero">3.º</span>
            <span className="mono">EL PUNTO DE PARTIDA</span>
          </div>
          <p className="relato" data-aparecer="subir" style={retraso(120)}>
            No fue mi mejor proyecto. Lo miro hoy y veo todo lo que le faltaba, pero también un
            punto de partida. No lo borraría de esta historia.
          </p>
          <ImagenProximamente
            texto="Captura del proyecto de 3.º año."
            className="salto__pendiente"
            demora={240}
          />
        </div>

        <div className="salto__eje" data-aparecer="eje" aria-hidden="true" />

        <div className="salto__columna salto__columna--despues">
          <div className="salto__anio color-celeste" data-aparecer="subir" style={retraso(200)}>
            <span className="salto__numero">4.º</span>
            <span className="mono">EL PROYECTO QUE CAMBIÓ TODO</span>
          </div>
          <p className="relato" data-aparecer="subir" style={retraso(320)}>
            Con Sirena el salto fue enorme. Pasé de una entrega que no me convencía a un proyecto
            que sí me importaba. Esta vez no se trataba solo de aprobar.
          </p>
          <div className="salto__identidad">
            <MarcaSirena className="marca-sirena--chica" style={retraso(440)} />
            <p className="salto__tema" data-aparecer="subir" style={retraso(560)}>
              Predicción de
              <br />
              inundaciones con IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

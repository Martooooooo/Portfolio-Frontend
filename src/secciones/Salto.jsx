import Foto from '../componentes/Foto.jsx';
import { ImagenProximamente } from '../componentes/Proximamente.jsx';
import { IMAGENES } from '../datos.js';

export default function Salto() {
  return (
    <section className="seccion salto" id="el-salto">
      <div className="salto__encabezado">
        <p className="capitulo color-celeste">02 / EL SALTO</p>
        <h2 className="titulo salto__titulo">
          DE CUMPLIR CON LA ENTREGA
          <br />A QUERER IR MÁS ALLÁ.
        </h2>
      </div>

      <div className="salto__comparacion">
        <div className="salto__columna salto__columna--antes">
          <div className="salto__anio">
            <span className="salto__numero">3.º</span>
            <span className="mono">EL PUNTO DE PARTIDA</span>
          </div>
          <p className="relato">
            No fue mi mejor proyecto. Lo miro hoy y veo todo lo que le faltaba, pero también un
            punto de partida. No lo borraría de esta historia.
          </p>
          <ImagenProximamente texto="Captura del proyecto de 3.º año." className="salto__pendiente" />
        </div>

        <div className="salto__eje" aria-hidden="true" />

        <div className="salto__columna salto__columna--despues">
          <div className="salto__anio color-celeste">
            <span className="salto__numero">4.º</span>
            <span className="mono">EL PROYECTO QUE CAMBIÓ TODO</span>
          </div>
          <p className="relato">
            Con Sirena el salto fue enorme. Pasé de una entrega que no me convencía a un proyecto
            que sí me importaba. Esta vez no se trataba solo de aprobar.
          </p>
          <div className="salto__identidad">
            <Foto imagen={IMAGENES.sirenaAi} className="foto--logo-chico" />
            <p className="salto__tema">
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

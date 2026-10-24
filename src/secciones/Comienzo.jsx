import Foto from '../componentes/Foto.jsx';
import MarcaSirena from '../componentes/MarcaSirena.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Comienzo() {
  return (
    <section className="seccion comienzo" id="inicio">
      <hr className="separador" data-aparecer="linea" />

      <div className="comienzo__cuerpo">
        <div className="comienzo__intro">
          <p className="capitulo color-celeste" data-aparecer="subir">
            01 / SIRENA · DE 3.º A 4.º AÑO
          </p>
          <Titulo
            como="h1"
            className="comienzo__titulo"
            lineas={['NO FUE SOLO', 'UN CAMBIO', <span className="color-celeste">DE AÑO.</span>]}
          />
          <p className="relato comienzo__relato" data-aparecer="subir" style={retraso(350)}>
            En 3.º hice un proyecto que no salió como quería. En 4.º construí Sirena: predicción de
            inundaciones con IA. Y terminó valiendo mucho más que una nota.
          </p>
          <div className="comienzo__accion" data-aparecer="subir" style={retraso(500)}>
            <a href="#el-salto" className="boton">
              <span>Conocé el salto</span>
              <span className="boton__flecha" aria-hidden="true">
                ↓
              </span>
            </a>
            <span className="mono texto-11">DESPUÉS, LA CANCHA.</span>
          </div>
        </div>

        <div className="comienzo__archivo">
          <MarcaSirena className="marca-sirena--grande" style={retraso(200)} />
          <Foto imagen={IMAGENES.equipoSirena} className="foto--equipo-sirena" style={retraso(350)} />
          <p className="epigrafe" data-aparecer="subir" style={retraso(500)}>
            SIRENA / EL PROYECTO Y SU LADO HUMANO
          </p>
          <p className="comienzo__nota" data-aparecer="subir" style={retraso(600)}>
            Lo que cambió no fue
            <br />
            solamente el proyecto.
          </p>
        </div>
      </div>

      <div className="mono recorrido" data-aparecer="recorrido">
        <span>3.º / UNA ENTREGA</span>
        <span className="recorrido__trayecto" aria-hidden="true">
          <span className="recorrido__linea" />→
        </span>
        <span className="color-celeste">4.º / SIRENA</span>
        <span>
          UNA HISTORIA QUE SIGUE <span className="rebote">↓</span>
        </span>
      </div>
    </section>
  );
}

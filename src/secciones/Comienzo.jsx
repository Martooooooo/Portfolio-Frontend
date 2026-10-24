import Foto from '../componentes/Foto.jsx';
import { IMAGENES } from '../datos.js';

export default function Comienzo() {
  return (
    <section className="seccion comienzo" id="inicio">
      <nav className="nav">
        <a href="#inicio" className="nav__marca">
          SIRENA / Y ALGO MÁS.
        </a>
        <div className="nav__enlaces">
          <a href="#el-salto" className="mono nav__enlace">
            El salto
          </a>
          <a href="#sirena" className="mono nav__enlace">
            Sirena
          </a>
          <a href="#lo-personal" className="mono nav__enlace">
            Lo personal
          </a>
          <a href="#contacto" className="mono nav__contacto">
            Hablemos ↗
          </a>
        </div>
      </nav>
      <hr className="separador" />

      <div className="comienzo__cuerpo">
        <div className="comienzo__intro">
          <p className="capitulo color-celeste">01 / SIRENA · DE 3.º A 4.º AÑO</p>
          <h1 className="titulo comienzo__titulo">
            NO FUE SOLO
            <br />
            UN CAMBIO
            <br />
            <span className="color-celeste">DE AÑO.</span>
          </h1>
          <p className="relato comienzo__relato">
            En 3.º hice un proyecto que no salió como quería. En 4.º construí Sirena: predicción de
            inundaciones con IA. Y terminó valiendo mucho más que una nota.
          </p>
          <div className="comienzo__accion">
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
          <Foto imagen={IMAGENES.sirenaAi} className="foto--logo" />
          <Foto imagen={IMAGENES.equipoSirena} className="foto--equipo-sirena" />
          <p className="epigrafe">SIRENA / EL PROYECTO Y SU LADO HUMANO</p>
          <p className="comienzo__nota">
            Lo que cambió no fue
            <br />
            solamente el proyecto.
          </p>
        </div>
      </div>

      <div className="mono recorrido">
        <span>3.º / UNA ENTREGA</span>
        <span className="recorrido__trayecto color-celeste" aria-hidden="true">
          ──────────────────→
        </span>
        <span className="color-celeste">4.º / SIRENA</span>
        <span>UNA HISTORIA QUE SIGUE ↓</span>
      </div>
    </section>
  );
}

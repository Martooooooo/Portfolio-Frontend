import Foto from '../componentes/Foto.jsx';
import MarcaSirena from '../componentes/MarcaSirena.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { BASQUET, IMAGENES, NOMBRE_CORTO } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Comienzo() {
  return (
    <section className="seccion comienzo" id="inicio">
      <div className="comienzo__resplandor" aria-hidden="true" />
      <hr className="separador" data-aparecer="linea" />

      <div className="comienzo__cuerpo">
        <div className="comienzo__intro">
          <p className="comienzo__saludo" data-aparecer="subir">
            <span className="comienzo__guion" aria-hidden="true" />
            <span>
              Hola, soy <strong>{NOMBRE_CORTO}</strong>.
            </span>
          </p>
          <Titulo
            como="h1"
            className="comienzo__titulo"
            lineas={['NO FUE SOLO', 'UN CAMBIO', <span className="color-celeste">DE AÑO.</span>]}
          />
          <p className="relato comienzo__relato" data-aparecer="subir" style={retraso(350)}>
            En 3.º hice un proyecto para aprobar la materia. En 4.º creamos{' '}
            <strong className="color-texto">Sirena</strong> con mi equipo, también para aprobar. En 5.º
            decidimos profesionalizarla, y terminó significando mucho más que una nota: predicción de
            inundaciones con inteligencia artificial, hectárea por hectárea. Esta página cuenta ese salto,
            y lo que hago cuando no estoy con Sirena: jugar al básquet en {BASQUET.club}.
          </p>
          <div className="comienzo__accion" data-aparecer="subir" style={retraso(500)}>
            <a href="#el-salto" className="boton">
              <span>Mirá el salto</span>
              <span className="boton__flecha" aria-hidden="true">
                ↓
              </span>
            </a>
            <a href="#basquet" className="mono enlace-secundario">
              O ANDÁ DIRECTO A LA CANCHA →
            </a>
          </div>
        </div>

        <figure className="comienzo__collage">
          <Foto imagen={IMAGENES.retrato} className="foto--retrato" style={retraso(150)} />
          <MarcaSirena className="marca-sirena--grande comienzo__sticker" style={retraso(450)} />
          <span className="mono comienzo__chip" data-aparecer="subir" style={retraso(650)}>
            #{BASQUET.dorsal} · {BASQUET.club.toUpperCase()}
          </span>
          <figcaption className="epigrafe comienzo__epigrafe" data-aparecer="subir" style={retraso(600)}>
            ESTUDIANTE TIC EN ORT BELGRANO · DESARROLLADOR DE SIRENA · ALA-PÍVOT
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

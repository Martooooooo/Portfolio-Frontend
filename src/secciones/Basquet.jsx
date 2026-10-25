import Foto from '../componentes/Foto.jsx';
import { TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { BASQUET, IMAGENES, LECCIONES, NOMBRE } from '../datos.js';
import { retraso } from '../animaciones.js';

// Ficha de jugador: solo muestra los datos que están completos en datos.js.
function Ficha() {
  const datos = [
    ['Club', BASQUET.club],
    ['Posición', BASQUET.posicion],
    ['Categoría', BASQUET.categoria],
    ['Juego desde', BASQUET.desde],
  ].filter(([, valor]) => valor);

  return (
    <aside className="ficha" data-aparecer="subir" style={retraso(350)}>
      <div className="ficha__cabeza">
        <Foto imagen={IMAGENES.escudo} className="foto--escudo" />
        <div className="ficha__nombre">
          <span className="mono">FICHA DE JUGADOR</span>
          <strong>{NOMBRE}</strong>
        </div>
        {BASQUET.dorsal && <span className="ficha__dorsal">{BASQUET.dorsal}</span>}
      </div>
      <dl className="ficha__datos">
        {datos.map(([dato, valor]) => (
          <div key={dato}>
            <dt className="mono">{dato}</dt>
            <dd>{valor}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default function Basquet() {
  return (
    <section className="seccion basquet" id="basquet">
      <div className="basquet__intro">
        <div>
          <p className="capitulo color-naranja" data-aparecer="subir">
            08 / LA OTRA MITAD
          </p>
          <Titulo className="basquet__titulo" lineas={['BÁSQUET.']} />
        </div>
        <p className="basquet__bajada" data-aparecer="subir" style={retraso(250)}>
          Mucho de lo que hice con Sirena lo aprendí primero en la cancha.
        </p>
      </div>

      <div className="basquet__juego">
        <figure className="basquet__accion">
          <Foto imagen={IMAGENES.saltoPelota} className="foto--salto" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EL JUEGO / EN EL AIRE
          </figcaption>
        </figure>

        <div className="basquet__centro">
          <Titulo
            como="p"
            className="basquet__declaracion"
            lineas={['EL EQUIPO.', 'LA CANCHA.', 'LO QUE ME MUEVE.']}
          />
          <p className="relato" data-aparecer="subir" style={retraso(300)}>
            Juego en {BASQUET.club} desde los 8 años, siempre en el mismo club. Es el lugar donde no
            hay pantallas ni entregas: solo el equipo, la pelota y las ganas de ganar el próximo.
          </p>
          <Ficha />
        </div>

        <div className="basquet__gesto">
          <Foto imagen={IMAGENES.lanzamiento} className="foto--lanzamiento" style={retraso(250)} />
          <p className="mono basquet__detalle" data-aparecer="subir" style={retraso(300)}>
            NO TODO
            <br />
            NECESITA
            <br />
            UNA NOTA.
          </p>
        </div>
      </div>

      <div className="lecciones">
        <div className="lecciones__encabezado">
          <p className="capitulo color-durazno" data-aparecer="subir">
            DE LA CANCHA A SIRENA
          </p>
          <Titulo className="lecciones__titulo" lineas={['LO QUE APRENDÍ JUGANDO', 'Y USÉ CONSTRUYENDO.']} />
        </div>
        <ol className="lecciones__lista">
          {LECCIONES.map((leccion, i) => (
            <li className="leccion" key={leccion.cancha} data-aparecer="subir" style={retraso(i * 140)}>
              <span className="leccion__numero">0{i + 1}</span>
              <h3 className="leccion__titulo">{leccion.cancha}</h3>
              <p className="leccion__texto">{leccion.texto}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="basquet__equipo">
        <Foto imagen={IMAGENES.equipoBasquet} className="foto--equipo-basquet">
          <span className="foto__rotulo">{BASQUET.club.toUpperCase()} / MI EQUIPO</span>
        </Foto>
        <div className="basquet__recuerdo">
          <span className="basquet__comillas" aria-hidden="true">
            “
          </span>
          {BASQUET.recuerdo ? (
            <p className="basquet__cita" data-aparecer="subir" style={retraso(200)}>
              {BASQUET.recuerdo}
            </p>
          ) : (
            <TextoProximamente demora={200}>Un recuerdo de la cancha que no me olvido más.</TextoProximamente>
          )}
        </div>
      </div>

      <figure className="basquet__lugar">
        <Foto imagen={IMAGENES.cancha} className="foto--cancha" />
        <figcaption className="mono basquet__epigrafe-cancha" data-aparecer="subir" style={retraso(250)}>
          <span className="color-durazno">LA CANCHA / OTRA PARTE DE ESTA HISTORIA</span>
          <span>ACÁ TAMBIÉN SE APRENDE.</span>
        </figcaption>
      </figure>
    </section>
  );
}

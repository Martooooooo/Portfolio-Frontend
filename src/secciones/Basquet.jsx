import Foto from '../componentes/Foto.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { IMAGENES } from '../datos.js';
import { retraso } from '../animaciones.js';

export default function Basquet() {
  return (
    <section className="seccion basquet" id="basquet">
      <div className="basquet__intro">
        <div>
          <p className="capitulo color-naranja" data-aparecer="subir">
            07 / MI LADO MÁS PERSONAL
          </p>
          <Titulo className="basquet__titulo" lineas={['BÁSQUET.']} />
        </div>
        <p className="basquet__bajada" data-aparecer="subir" style={retraso(250)}>
          Otra parte de mí.
          <br />
          Otro lugar desde donde
          <br />
          contar mi historia.
        </p>
      </div>

      <div className="basquet__juego">
        <figure className="basquet__accion">
          <Foto imagen={IMAGENES.saltoPelota} className="foto--salto" />
          <figcaption className="epigrafe" data-aparecer="subir" style={retraso(200)}>
            EL JUEGO / EN MOVIMIENTO
          </figcaption>
        </figure>

        <div className="basquet__equipo">
          <Titulo
            como="p"
            className="basquet__declaracion"
            lineas={['EL EQUIPO.', 'LA CANCHA.', 'LO QUE ME MUEVE.']}
          />
          <p className="relato" data-aparecer="subir" style={retraso(300)}>
            El básquet es una parte personal de esta página. No lo pongo como un logro más, sino
            como algo que también habla de mí.
          </p>
          <figure>
            <Foto imagen={IMAGENES.equipoBasquet} className="foto--equipo-basquet" style={retraso(150)} />
            <figcaption className="epigrafe" data-aparecer="subir" style={retraso(300)}>
              BÁSQUET / UNA HISTORIA COMPARTIDA
            </figcaption>
          </figure>
        </div>

        <div className="basquet__gesto">
          <Foto imagen={IMAGENES.lanzamiento} className="foto--lanzamiento" style={retraso(250)} />
          <div className="basquet__escudo">
            <Foto imagen={IMAGENES.escudo} className="foto--escudo" style={retraso(150)} />
            <p className="mono basquet__detalle" data-aparecer="subir" style={retraso(300)}>
              NO TODO
              <br />
              NECESITA
              <br />
              UNA NOTA.
            </p>
          </div>
        </div>
      </div>

      <figure className="basquet__lugar">
        <Foto imagen={IMAGENES.cancha} className="foto--cancha" />
        <figcaption className="mono basquet__epigrafe-cancha" data-aparecer="subir" style={retraso(250)}>
          <span className="color-durazno">LA CANCHA / OTRA PARTE DE ESTA HISTORIA</span>
          <span>PRÓXIMAMENTE / Un recuerdo personal del básquet.</span>
        </figcaption>
      </figure>
    </section>
  );
}

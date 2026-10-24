import Foto from '../componentes/Foto.jsx';
import { IMAGENES } from '../datos.js';

export default function Basquet() {
  return (
    <section className="seccion basquet" id="basquet">
      <div className="basquet__intro">
        <div>
          <p className="capitulo color-naranja">07 / MI LADO MÁS PERSONAL</p>
          <h2 className="titulo basquet__titulo">BÁSQUET.</h2>
        </div>
        <p className="basquet__bajada">
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
          <figcaption className="epigrafe">EL JUEGO / EN MOVIMIENTO</figcaption>
        </figure>

        <div className="basquet__equipo">
          <p className="titulo basquet__declaracion">
            EL EQUIPO.
            <br />
            LA CANCHA.
            <br />
            LO QUE ME MUEVE.
          </p>
          <p className="relato">
            El básquet es una parte personal de esta página. No lo pongo como un logro más, sino
            como algo que también habla de mí.
          </p>
          <figure>
            <Foto imagen={IMAGENES.equipoBasquet} className="foto--equipo-basquet" />
            <figcaption className="epigrafe">BÁSQUET / UNA HISTORIA COMPARTIDA</figcaption>
          </figure>
        </div>

        <div className="basquet__gesto">
          <Foto imagen={IMAGENES.lanzamiento} className="foto--lanzamiento" />
          <div className="basquet__escudo">
            <Foto imagen={IMAGENES.escudo} className="foto--escudo" />
            <p className="mono basquet__detalle color-durazno">
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
        <figcaption className="mono basquet__epigrafe-cancha">
          <span className="color-durazno">LA CANCHA / OTRA PARTE DE ESTA HISTORIA</span>
          <span>PRÓXIMAMENTE / Un recuerdo personal del básquet.</span>
        </figcaption>
      </figure>
    </section>
  );
}

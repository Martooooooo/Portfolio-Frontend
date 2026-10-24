import Titulo from '../componentes/Titulo.jsx';
import { retraso } from '../animaciones.js';

export default function LoQueSoy() {
  return (
    <section className="seccion puente" id="lo-personal">
      <hr className="separador" data-aparecer="linea" />
      <p className="capitulo color-durazno" data-aparecer="subir">
        06 / UN POCO MÁS CERCA
      </p>
      <div className="puente__cuerpo">
        <Titulo
          className="puente__titulo"
          lineas={['PERO NO TODO', 'LO MÍO PASA', <span className="color-durazno">POR UN PROYECTO.</span>]}
        />
        <div className="puente__texto">
          <p className="relato" data-aparecer="subir" style={retraso(300)}>
            Sirena cuenta una parte de mi historia. La otra se juega en la cancha, con una pelota
            naranja y la camiseta de mi club.
          </p>
          <a href="#basquet" className="mono puente__enlace" data-aparecer="subir" style={retraso(450)}>
            DE LA PANTALLA A LA CANCHA <span className="rebote">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

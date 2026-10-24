import { ImagenProximamente, TextoProximamente } from '../componentes/Proximamente.jsx';
import Titulo from '../componentes/Titulo.jsx';
import { retraso } from '../animaciones.js';

export default function QueEs() {
  return (
    <section className="seccion que-es" id="sirena">
      <hr className="separador" data-aparecer="linea" />
      <div className="que-es__cuerpo">
        <div className="que-es__descripcion">
          <p className="capitulo color-verde" data-aparecer="subir">
            03 / EL PROYECTO
          </p>
          <Titulo className="que-es__nombre" lineas={['SIRENA.']} />
          <p className="que-es__definicion" data-aparecer="subir" style={retraso(150)}>
            Predicción de inundaciones
            <br />
            con inteligencia artificial.
          </p>
          <p className="relato" data-aparecer="subir" style={retraso(250)}>
            Ese fue el desafío de 4.º año. Para mí, Sirena marca la diferencia entre hacer algo para
            entregar y construir algo que siento que importa.
          </p>
          <TextoProximamente demora={350}>
            Mi aporte al proyecto y una explicación de cómo funciona.
          </TextoProximamente>
        </div>

        <div className="que-es__visual">
          <ImagenProximamente
            texto="Captura del mapa de riesgo de Sirena."
            className="que-es__pendiente"
            demora={200}
          />
          <p className="epigrafe" data-aparecer="subir" style={retraso(300)}>
            ESPACIO PARA UNA CAPTURA REAL DEL PROYECTO.
          </p>
        </div>
      </div>
    </section>
  );
}

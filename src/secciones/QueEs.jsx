import { ImagenProximamente, TextoProximamente } from '../componentes/Proximamente.jsx';

export default function QueEs() {
  return (
    <section className="seccion que-es" id="sirena">
      <hr className="separador" />
      <div className="que-es__cuerpo">
        <div className="que-es__descripcion">
          <p className="capitulo color-verde">03 / EL PROYECTO</p>
          <h2 className="titulo que-es__nombre">SIRENA.</h2>
          <p className="que-es__definicion">
            Predicción de inundaciones
            <br />
            con inteligencia artificial.
          </p>
          <p className="relato">
            Ese fue el desafío de 4.º año. Para mí, Sirena marca la diferencia entre hacer algo para
            entregar y construir algo que siento que importa.
          </p>
          <TextoProximamente>Mi aporte al proyecto y una explicación de cómo funciona.</TextoProximamente>
        </div>

        <div className="que-es__visual">
          <ImagenProximamente texto="Captura del mapa de riesgo de Sirena." className="que-es__pendiente" />
          <p className="epigrafe">ESPACIO PARA UNA CAPTURA REAL DEL PROYECTO.</p>
        </div>
      </div>
    </section>
  );
}

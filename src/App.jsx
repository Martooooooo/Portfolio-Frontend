import { useAnimaciones } from './animaciones.js';
import Marquesina from './componentes/Marquesina.jsx';
import Navegacion from './componentes/Navegacion.jsx';
import Comienzo from './secciones/Comienzo.jsx';
import Salto from './secciones/Salto.jsx';
import QueEs from './secciones/QueEs.jsx';
import Campo from './secciones/Campo.jsx';
import MasQueUnaNota from './secciones/MasQueUnaNota.jsx';
import Personas from './secciones/Personas.jsx';
import LoQueSoy from './secciones/LoQueSoy.jsx';
import Basquet from './secciones/Basquet.jsx';
import Contacto from './secciones/Contacto.jsx';
import { BASQUET } from './datos.js';

export default function App() {
  useAnimaciones();

  return (
    <main className="pagina">
      <div className="hilo" aria-hidden="true">
        <div className="hilo__progreso" />
      </div>
      <Navegacion />
      <Comienzo />
      <Salto />
      <Marquesina
        className="marquesina--sirena"
        items={['Sirena AI', 'Predicción de inundaciones', 'Inteligencia artificial', 'Hectárea por hectárea', 'Hecho en equipo']}
      />
      <QueEs />
      <Campo />
      <MasQueUnaNota />
      <Personas />
      <LoQueSoy />
      <Marquesina
        className="marquesina--basquet"
        items={['Básquet', BASQUET.club, `#${BASQUET.dorsal}`, 'Entrenar', 'Competir', 'En equipo']}
      />
      <Basquet />
      <Contacto />
    </main>
  );
}

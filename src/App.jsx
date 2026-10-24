import Comienzo from './secciones/Comienzo.jsx';
import Salto from './secciones/Salto.jsx';
import QueEs from './secciones/QueEs.jsx';
import MasQueUnaNota from './secciones/MasQueUnaNota.jsx';
import Personas from './secciones/Personas.jsx';
import LoQueSoy from './secciones/LoQueSoy.jsx';
import Basquet from './secciones/Basquet.jsx';
import Contacto from './secciones/Contacto.jsx';

export default function App() {
  return (
    <main className="pagina">
      <div className="hilo" aria-hidden="true" />
      <Comienzo />
      <Salto />
      <QueEs />
      <MasQueUnaNota />
      <Personas />
      <LoQueSoy />
      <Basquet />
      <Contacto />
    </main>
  );
}

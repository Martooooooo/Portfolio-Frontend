import { useState } from 'react';
import { NOMBRE } from '../datos.js';

const ENLACES = [
  ['#el-salto', 'El salto'],
  ['#sirena', 'Sirena'],
  ['#campo', 'Al campo'],
  ['#basquet', 'Básquet'],
];

// En el celular los enlaces se esconden detrás del botón «Menú».
export default function Navegacion() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className={`nav ${abierto ? 'nav--abierto' : ''}`}>
      <a href="#inicio" className="mono saltar">
        Saltar al contenido
      </a>
      <div className="nav__interior">
        <a href="#inicio" className="nav__marca" onClick={cerrar}>
          <span className="nav__punto" aria-hidden="true" />
          {NOMBRE.toUpperCase()}
        </a>
        <nav className="nav__enlaces" id="nav-enlaces">
          {ENLACES.map(([destino, texto]) => (
            <a key={destino} href={destino} className="mono nav__enlace" onClick={cerrar}>
              {texto}
            </a>
          ))}
          <a href="#contacto" className="mono nav__contacto" onClick={cerrar}>
            Hablemos ↗
          </a>
        </nav>
        <button
          type="button"
          className="mono nav__menu"
          aria-expanded={abierto}
          aria-controls="nav-enlaces"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? 'Cerrar' : 'Menú'}
        </button>
      </div>
    </header>
  );
}

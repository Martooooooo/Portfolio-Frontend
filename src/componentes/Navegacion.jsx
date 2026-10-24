import { NOMBRE } from '../datos.js';

export default function Navegacion() {
  return (
    <header className="nav">
      <div className="nav__interior">
        <a href="#inicio" className="nav__marca">
          <span className="nav__punto" aria-hidden="true" />
          {NOMBRE.toUpperCase()}
        </a>
        <nav className="nav__enlaces">
          <a href="#el-salto" className="mono nav__enlace">
            El salto
          </a>
          <a href="#sirena" className="mono nav__enlace">
            Sirena
          </a>
          <a href="#basquet" className="mono nav__enlace">
            Básquet
          </a>
          <a href="#contacto" className="mono nav__contacto">
            Hablemos ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

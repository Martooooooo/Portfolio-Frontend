import { useState } from 'react';
import Titulo from '../componentes/Titulo.jsx';
import { CONTACTO, NOMBRE, REDES, REDES_SIRENA, TEMAS_CONTACTO } from '../datos.js';
import { retraso } from '../animaciones.js';

// El mail que hay en CONTACTO, si es un enlace «mailto:».
const MAIL = CONTACTO.startsWith('mailto:') ? CONTACTO.slice('mailto:'.length) : '';

// Copia el mail y avisa unos segundos que quedó copiado.
function CopiarMail() {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(MAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      window.location.href = CONTACTO;
    }
  };

  return (
    <button type="button" className="mono contacto__copiar" onClick={copiar} aria-live="polite">
      {copiado ? 'MAIL COPIADO ✓' : 'COPIAR MAIL'}
    </button>
  );
}

export default function Contacto() {
  const contenido = (
    <>
      <span>Hablemos</span>
      <span className="contacto__flecha" aria-hidden="true">
        ↗
      </span>
    </>
  );
  const redes = [...REDES, ...REDES_SIRENA].filter((red) => red.url);

  return (
    <section className="seccion contacto" id="contacto">
      <hr className="separador" data-aparecer="linea" />

      <div className="contacto__cuerpo">
        <Titulo className="contacto__titulo" lineas={['PROYECTOS,', 'BÁSQUET', 'Y LO QUE VIENE.']} />
        <div className="contacto__invitacion">
          <p className="relato" data-aparecer="subir" style={retraso(300)}>
            De aquel proyecto de 3.º a Sirena. De Sirena a la cancha. Y esto recién empieza: el año
            que viene buscamos tener los primeros clientes. Si algo de esta historia te hizo conectar,
            hablemos.
          </p>
          {CONTACTO ? (
            <a href={CONTACTO} className="contacto__enlace" data-aparecer="subrayado" style={retraso(450)}>
              {contenido}
            </a>
          ) : (
            <div className="contacto__enlace" data-aparecer="subrayado" style={retraso(450)}>
              {contenido}
            </div>
          )}
          {MAIL && (
            <div className="contacto__mail" data-aparecer="subir" style={retraso(550)}>
              <span className="mono color-texto">{MAIL}</span>
              <CopiarMail />
            </div>
          )}
          {MAIL && (
            <div className="contacto__temas" data-aparecer="subir" style={retraso(600)}>
              <span className="mono">¿DE QUÉ CHARLAMOS?</span>
              <ul className="temas">
                {TEMAS_CONTACTO.map((tema) => (
                  <li key={tema}>
                    <a href={`${CONTACTO}?subject=${encodeURIComponent(`${tema} · desde tu página`)}`} className="tema">
                      {tema}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!CONTACTO && (
            <p className="epigrafe" data-aparecer="subir" style={retraso(600)}>
              PRÓXIMAMENTE / Mi mail o enlace de contacto.
            </p>
          )}
          {redes.length > 0 && (
            <ul className="redes" data-aparecer="subir" style={retraso(650)}>
              {redes.map((red) => (
                <li key={red.nombre}>
                  <a href={red.url} target="_blank" rel="noreferrer" className="mono redes__enlace">
                    {red.nombre} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <footer className="mono pie" data-aparecer="subir">
        <span>
          {NOMBRE.toUpperCase()} / SIRENA → BÁSQUET / {new Date().getFullYear()}
        </span>
        <a href="#inicio" className="pie__volver">
          VOLVER AL COMIENZO ↑
        </a>
      </footer>
    </section>
  );
}

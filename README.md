# Portfolio · De Sirena a la cancha

Landing personal hecha a partir del diseño de Figma «De Sirena a la cancha · Landing personal». React 18 + Vite, CSS propio.

## Comandos

- `npm install`: instala las dependencias.
- `npm run dev`: servidor local en http://localhost:5173.
- `npm run build`: build de producción en `dist/`.

## Dónde cambiar cosas

- `src/secciones/`: una sección por archivo, en el orden de la página (01 a 08).
- `src/estilos.css`: colores, tipografías y medidas del diseño.
- `src/datos.js`: todos los textos editables: tu nombre, las imágenes (y qué foto va en cada lugar vacío), la comparación de 3.º a 4.º, los pasos de Sirena, tu aporte, la ficha de básquet, lo que aprendiste en la cancha, el contacto y las redes.
- `public/imagenes/`: las fotos. La lista de archivos está en `public/imagenes/LEEME.md`.
- `src/animaciones.js`: las animaciones al bajar. Cada elemento con `data-aparecer` entra cuando llega a la pantalla; los estilos de cada tipo (`subir`, `titulo`, `foto`, `linea`…) están al final de `src/estilos.css`. Con «reducir movimiento» activado en el sistema, la página se muestra sin animaciones.
- Lo que todavía no tiene contenido se muestra como «Próximamente» (`src/componentes/Proximamente.jsx`).

// Genera versiones más chicas de cada foto de public/imagenes/ en public/imagenes/tamanos/ y las
// anota en src/tamanos.json, para que cada pantalla baje solo lo que necesita.
// Corre solo antes de `npm run dev` y `npm run build`, y únicamente rehace lo que cambió.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, parse } from 'node:path';

const CARPETA = 'public/imagenes';
const SALIDA = join(CARPETA, 'tamanos');
const REGISTRO = 'src/tamanos.json';
const ANCHOS = [120, 240, 480, 800, 1200, 1600, 2000];
// Las portadas de los videos no pueden usar versiones: el navegador siempre baja una sola.
const SIN_VERSIONES = new Set(['sirena-flujo.jpg', 'expo-entrevista.jpg']);

const fotos = readdirSync(CARPETA).filter((f) => /\.(jpe?g|webp)$/i.test(f) && !SIN_VERSIONES.has(f));
const anterior = existsSync(REGISTRO) ? JSON.parse(readFileSync(REGISTRO, 'utf8')) : {};
const rutaVersion = (foto, ancho) => {
  const { name, ext } = parse(foto);
  return join(SALIDA, `${name}-${ancho}${ext}`);
};

// Hay que rehacer una foto si no está anotada, le falta una versión o es más nueva que sus versiones.
const vencida = (foto) => {
  const dato = anterior[`/imagenes/${foto}`];
  if (!dato) return true;
  const fecha = statSync(join(CARPETA, foto)).mtimeMs;
  return dato.versiones.some((ancho) => {
    const ruta = rutaVersion(foto, ancho);
    return !existsSync(ruta) || statSync(ruta).mtimeMs < fecha;
  });
};

const pendientes = fotos.filter(vencida);
const nombres = new Set(fotos.map((foto) => `/imagenes/${foto}`));
const sobrantes = Object.keys(anterior).filter((ruta) => !nombres.has(ruta));

if (pendientes.length || sobrantes.length) {
  const { default: sharp } = await import('sharp');
  mkdirSync(SALIDA, { recursive: true });
  const registro = { ...anterior };

  for (const ruta of sobrantes) {
    const foto = ruta.split('/').pop();
    anterior[ruta].versiones.forEach((ancho) => rmSync(rutaVersion(foto, ancho), { force: true }));
    delete registro[ruta];
  }

  for (const foto of pendientes) {
    const origen = join(CARPETA, foto);
    const { width } = await sharp(origen).metadata();
    const versiones = ANCHOS.filter((ancho) => ancho < width * 0.85);
    for (const ancho of versiones) {
      const imagen = sharp(origen).resize({ width: ancho });
      await (foto.endsWith('.webp') ? imagen.webp({ quality: 90 }) : imagen.jpeg({ quality: 90, mozjpeg: true })).toFile(
        rutaVersion(foto, ancho),
      );
    }
    registro[`/imagenes/${foto}`] = { ancho: width, versiones };
  }

  const ordenado = Object.fromEntries(Object.entries(registro).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(REGISTRO, `${JSON.stringify(ordenado, null, 2)}\n`);
  console.log(`Imágenes: ${pendientes.length} actualizadas, ${sobrantes.length} quitadas.`);
}

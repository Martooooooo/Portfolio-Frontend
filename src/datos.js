// Todo lo que se puede editar sin tocar el diseño está acá.

// Tu nombre, tal como querés que aparezca en la página.
export const NOMBRE = 'Martín Biosca';
export const NOMBRE_CORTO = 'Martín';

// Cuánto ocupa una imagen en cada pantalla, para que el navegador elija qué versión bajar:
// en el escritorio, en pantallas medianas y, si difiere del ancho completo, en el celular.
// En el escritorio pide 1,5 veces lo que ocupa: una foto más grande achicada se ve más nítida.
const medida = (escritorio, mediana = 'calc(100vw - 96px)', celular = 'calc(100vw - 48px)') =>
  `(max-width: 640px) ${celular}, (max-width: 1100px) ${mediana}, ${parseInt(escritorio, 10) * 1.5}px`;

const EXPO_ESCENARIO = {
  src: '/imagenes/expo-escenario.jpg',
  alt: 'El equipo en el escenario de la Expo Rural de 9 de Julio, bajo la pantalla «Emprender como forma de aprender»',
  sizes: medida('411px', '50vw'),
};

// Imágenes (en public/imagenes/). `reemplazo` es la foto que se muestra mientras la tuya no está:
// cuando subís el archivo, aparece sola. `prioridad` carga la imagen de entrada, sin esperar a bajar.
export const IMAGENES = {
  sirena: { src: '/imagenes/sirena.jpg', alt: 'Ilustración de Sirena: una sirena con una baliza', sizes: '100px' },

  // Todavía falta: es la foto grande del comienzo.
  retrato: {
    src: '/imagenes/retrato.jpg',
    alt: `${NOMBRE_CORTO} presentando Sirena`,
    sizes: medida('460px', '460px'),
    prioridad: true,
    reemplazo: { ...EXPO_ESCENARIO, sizes: medida('460px', '460px') },
  },

  // Capturas de sirena-ai.com.ar.
  sirenaFlujo: {
    src: '/imagenes/sirena-flujo.mp4',
    poster: '/imagenes/sirena-flujo.jpg',
    alt: 'Video: el flujo de Sirena AI, de marcar un campo en el mapa satelital a recibir la alerta de inundación por mail',
  },
  sirenaDeteccion: {
    src: '/imagenes/sirena-deteccion.webp',
    alt: 'Sirena AI: el agua detectada por el satélite en cada hectárea del campo',
    sizes: medida('410px', '33vw'),
  },
  sirenaPrediccion: {
    src: '/imagenes/sirena-prediccion.webp',
    alt: 'Sirena AI: el mapa de probabilidad de inundación a 12 días, con riesgo crítico en el sur del campo',
    sizes: medida('410px', '33vw'),
  },
  sirenaAlerta: {
    src: '/imagenes/sirena-alerta.jpg',
    alt: 'El mail de alerta crítica de inundación que envía Sirena AI',
    sizes: medida('410px', '33vw'),
  },

  // Sirena: la primera presentación y la TIC Experience.
  aula: {
    src: '/imagenes/aula.jpg',
    alt: 'El equipo presentando Sirena AI en el aula, con la ilustración proyectada',
    sizes: medida('630px', '50vw'),
  },
  ticEntrevista: {
    src: '/imagenes/tic-entrevista.webp',
    alt: 'TN Tecno entrevistando al equipo en el stand de Sirena AI en la TIC Experience',
    sizes: medida('620px'),
  },

  // Al campo: Emprender como forma de aprender.
  expoEscenario: EXPO_ESCENARIO,
  expoCharla: {
    src: '/imagenes/expo-charla.jpg',
    alt: 'La charla «Sirena AI: emprender como forma de aprender» en la Expo Rural de 9 de Julio, en la transmisión de Suma Play',
    sizes: medida('900px'),
  },
  expoEntrevista: {
    src: '/imagenes/expo-entrevista.mp4',
    poster: '/imagenes/expo-entrevista.jpg',
    alt: 'Video: el equipo entrevistado en la Expo Rural de 9 de Julio',
  },

  encuentro: {
    src: '/imagenes/encuentro.jpg',
    alt: 'Encuentro en el Ateneo de la Sociedad Rural de Nueve de Julio, con la bandera argentina',
    sizes: medida('411px', '50vw'),
  },

  // El equipo.
  parqueInnovacion: {
    src: '/imagenes/parque-innovacion.jpg',
    alt: 'El equipo de Sirena en el Parque de la Innovación, donde la presentamos por primera vez fuera del colegio',
    sizes: medida('624px', '640px'),
  },
  equipoSirena: {
    src: '/imagenes/equipo-sirena.jpg',
    alt: 'El equipo de Sirena de noche en el Parque de la Innovación',
    sizes: medida('290px', '300px', '52vw'),
  },
  standSirena: {
    src: '/imagenes/stand-sirena.jpg',
    alt: 'El equipo con alguien de Unitree junto a la pantalla con el afiche de Sirena AI, la primera vez que la presentamos, en el colegio',
    sizes: medida('700px'),
  },
  ticNoche: {
    src: '/imagenes/tic-noche.jpg',
    alt: 'El equipo de noche en el Parque de la Innovación, bajo un árbol de luces',
    sizes: medida('630px', '50vw'),
  },

  saltoPelota: {
    src: '/imagenes/salto-pelota.webp',
    alt: 'Salto por la pelota en un partido',
    sizes: medida('420px', '50vw'),
  },
  equipoBasquet: {
    src: '/imagenes/equipo-basquet.webp',
    alt: 'El equipo de básquet de Platense en la cancha',
    sizes: medida('860px'),
  },
  lanzamiento: { src: '/imagenes/lanzamiento.webp', alt: 'Lanzamiento al aro', sizes: medida('300px', '50vw') },
  escudo: { src: '/imagenes/escudo-cap.jpg', alt: 'Escudo del Club Atlético Platense', sizes: '60px' },
  cancha: { src: '/imagenes/cancha.webp', alt: 'Cancha de básquet de Platense', sizes: medida('1280px') },
};

// 02 · El salto: la comparación fila por fila entre 3.º y 4.º (para aprobar) y 5.º (profesionalizar Sirena).
export const SALTO = [
  {
    tema: '¿Para qué servía?',
    antes: 'Para entregarlo y aprobar.',
    despues: 'Para anticipar inundaciones antes de que pasen.',
  },
  {
    tema: '¿Quién lo iba a usar?',
    antes: 'Nadie, fuera del aula.',
    despues: 'Clientes reales: el año que viene buscamos que ya la estén usando.',
  },
  {
    tema: '¿Cómo lo encaré?',
    antes: 'Como una consigna más.',
    despues: 'Como algo propio, en equipo.',
  },
  {
    tema: '¿Qué me llevé?',
    antes: 'Una nota.',
    despues: 'Aprender a emprender, a trabajar con IA y a defender una idea.',
  },
];

// 03 · Sirena: cómo funciona, en tres pasos (como lo cuenta sirena-ai.com.ar), cada uno con su captura.
export const PASOS_SIRENA = [
  {
    titulo: 'Datos',
    texto: 'Imágenes de radar satelital, que ven a través de las nubes, detectan el agua en cada hectárea.',
    imagen: IMAGENES.sirenaDeteccion,
  },
  {
    titulo: 'Inteligencia artificial',
    texto: 'Un modelo estima la probabilidad de inundación de cada hectárea para los próximos 12 días.',
    imagen: IMAGENES.sirenaPrediccion,
  },
  {
    titulo: 'Alerta',
    texto: 'Cuando el riesgo sube, avisa por email con 12 días de anticipación, para actuar antes de que llegue el agua.',
    imagen: IMAGENES.sirenaAlerta,
  },
];

// 03 · Sirena: las cifras que la definen (como las cuenta sirena-ai.com.ar).
export const SIRENA_URL = 'https://www.sirena-ai.com.ar/';
export const DATOS_SIRENA = [
  { cifra: '12 días', texto: 'de anticipación para cada alerta.' },
  { cifra: '1 ha', texto: 'de detalle: el riesgo de cada hectárea, no del departamento.' },
  { cifra: 'Carlos Casares', texto: 'la zona que cubre hoy, en la provincia de Buenos Aires.' },
];

// Con qué está hecha la página de Sirena (lo que se ve en el sitio publicado). Las filas vacías no se muestran.
export const STACK_SIRENA = [
  ['Frontend', 'React, React Router'],
  ['Backend', 'API propia, desplegada en Vercel'],
  ['Cuentas', 'Inicio de sesión con Google'],
  ['Mapas', 'Imágenes satelitales de Esri'],
];

// Tu aporte a Sirena, en una o dos oraciones. Vacío: se muestra «Próximamente».
export const MI_APORTE =
  'Hice todo el frontend y el backend de la página de Sirena. Además, di charlas y presentaciones en varios lugares para contar el proyecto.';

// 08 · Básquet. Los datos vacíos no se muestran en la ficha.
export const BASQUET = {
  club: 'Platense',
  dorsal: '17',
  posicion: 'Ala-pívot',
  categoria: 'U17',
  desde: 'Los 8 años',
  // Un recuerdo o anécdota de la cancha. Vacío: se muestra «Próximamente».
  recuerdo:
    'Nueve años en el mismo club. Ahí aprendí lo que es la disciplina y la dedicación, y ahí están muchos de mis amigos de hace años.',
};

// Lo que la cancha me enseñó y después usé en Sirena.
export const LECCIONES = [
  {
    cancha: 'Jugar en equipo',
    texto: 'Un partido no lo gana uno solo. Sirena tampoco: es de todo un equipo.',
  },
  {
    cancha: 'Entrenar cuando nadie mira',
    texto: 'Lo que se ve en el partido sale de las prácticas que nadie ve. Con Sirena fue igual.',
  },
  {
    cancha: 'Perder y volver a la cancha',
    texto: 'Después de una derrota hay otro partido. En 5.º casi dejamos Sirena, y volvimos a la cancha.',
  },
];

// Temas para escribirme: cada uno abre el mail con el asunto listo.
export const TEMAS_CONTACTO = ['Sirena', 'Un proyecto', 'Básquet', 'Otra cosa'];

// Mail o enlace de contacto (por ejemplo, 'mailto:yo@mail.com'). Vacío: se muestra «Próximamente».
export const CONTACTO = 'mailto:tinchobiosca.0@gmail.com';

// Redes. Las que quedan vacías no se muestran.
export const REDES = [
  { nombre: 'Instagram', url: '' },
  { nombre: 'LinkedIn', url: '' },
  { nombre: 'GitHub', url: '' },
];

// Las redes de Sirena.
export const REDES_SIRENA = [
  { nombre: 'Sirena en Instagram', url: 'https://www.instagram.com/sirena.ai_arg/' },
  { nombre: 'Sirena en LinkedIn', url: 'https://www.linkedin.com/company/sirena-ai-arg' },
];

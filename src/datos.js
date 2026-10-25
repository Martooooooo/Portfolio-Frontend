// Todo lo que se puede editar sin tocar el diseño está acá.

// Tu nombre, tal como querés que aparezca en la página.
export const NOMBRE = 'Martín Biosca';
export const NOMBRE_CORTO = 'Martín';

// Imágenes (en public/imagenes/). `pendiente` es lo que se muestra mientras la foto no está:
// describe qué foto va en ese lugar. Cuando subís el archivo, el recuadro desaparece solo.
export const IMAGENES = {
  sirena: { src: '/imagenes/sirena.jpg', alt: 'Ilustración de Sirena: una sirena con una baliza' },

  // Todavía faltan.
  retrato: {
    src: '/imagenes/retrato.jpg',
    alt: `${NOMBRE_CORTO} presentando Sirena`,
    pendiente: 'Una foto tuya solo, vertical: presentando Sirena o con la credencial del evento.',
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
  },
  sirenaPrediccion: {
    src: '/imagenes/sirena-prediccion.webp',
    alt: 'Sirena AI: el mapa de probabilidad de inundación a 12 días, con riesgo crítico en el sur del campo',
  },
  sirenaAlerta: { src: '/imagenes/sirena-alerta.jpg', alt: 'El mail de alerta crítica de inundación que envía Sirena AI' },

  // Sirena: la primera presentación y TIC x26.
  aula: { src: '/imagenes/aula.jpg', alt: 'El equipo presentando Sirena AI en el aula, con la ilustración proyectada' },
  ticEntrevista: {
    src: '/imagenes/tic-entrevista.webp',
    alt: 'Entrevista de televisión en el stand de Sirena AI en TIC x26',
  },

  // Al campo: Emprender como forma de aprender.
  emprender: { src: '/imagenes/emprender.webp', alt: 'Emprender como forma de aprender' },
  expoEscenario: {
    src: '/imagenes/expo-escenario.jpg',
    alt: 'El equipo en el escenario de la Expo Rural, bajo la pantalla «Emprender como forma de aprender»',
  },
  expoCharla: {
    src: '/imagenes/expo-charla.jpg',
    alt: 'La charla «Sirena AI: emprender como forma de aprender» en la Expo Rural, en la transmisión de Suma Play',
  },
  expoEntrevista: {
    src: '/imagenes/expo-entrevista.mp4',
    poster: '/imagenes/expo-entrevista.jpg',
    alt: 'Video: el equipo entrevistado en la Expo Rural',
  },

  encuentro: {
    src: '/imagenes/encuentro.jpg',
    alt: 'Encuentro en el Ateneo de la Sociedad Rural de Nueve de Julio, con la bandera argentina',
  },

  // El equipo.
  parqueInnovacion: {
    src: '/imagenes/parque-innovacion.jpg',
    alt: 'El equipo de Sirena en el Parque de Innovación, con las credenciales de TIC x26',
  },
  equipoSirena: { src: '/imagenes/equipo-sirena.jpg', alt: 'El equipo de Sirena de noche, con las credenciales de TIC x26' },
  standSirena: { src: '/imagenes/stand-sirena.jpg', alt: 'El equipo con alguien de Unitree junto a la pantalla con el afiche de Sirena AI, la primera vez que la presentamos' },
  ticNoche: { src: '/imagenes/tic-noche.jpg', alt: 'El equipo de noche, con las credenciales de TIC x26, bajo un árbol de luces' },

  saltoPelota: { src: '/imagenes/salto-pelota.webp', alt: 'Salto por la pelota en un partido' },
  equipoBasquet: { src: '/imagenes/equipo-basquet.webp', alt: 'El equipo de básquet de Platense en la cancha' },
  lanzamiento: { src: '/imagenes/lanzamiento.webp', alt: 'Lanzamiento al aro' },
  escudo: { src: '/imagenes/escudo-cap.jpg', alt: 'Escudo del Club Atlético Platense' },
  cancha: { src: '/imagenes/cancha.webp', alt: 'Cancha de básquet de Platense' },
};

// 02 · El salto: la comparación fila por fila entre 3.º y 4.º.
export const SALTO = [
  {
    tema: '¿Para qué servía?',
    antes: 'Para entregarlo y aprobar.',
    despues: 'Para anticipar inundaciones antes de que pasen.',
  },
  {
    tema: '¿Quién lo iba a usar?',
    antes: 'Nadie, fuera del aula.',
    despues: 'La gente que vive en zonas que se inundan.',
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
  { cifra: 'Radar', texto: 'satelital, que ve el agua a través de las nubes.' },
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

// 07 · Básquet. Los datos vacíos no se muestran en la ficha.
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

// 09 · La historia sigue: el recorrido en una línea por etapa.
export const RECORRIDO = [
  { cuando: 'A los 8', que: 'Empiezo a jugar al básquet en Platense. Sigo en el mismo club.' },
  { cuando: 'Secundaria', que: 'Especialización TIC en ORT Belgrano: Tecnologías de la Información y la Comunicación. En curso.' },
  { cuando: '3.º año', que: 'Un proyecto para el colegio que no salió del aula.' },
  { cuando: '4.º año', que: 'Nace Sirena: una predicción de inundaciones por departamento, para toda la Argentina.' },
  { cuando: '5.º año', que: 'Casi la dejamos. La retomamos hectárea por hectárea, y hago el frontend y el backend.' },
  { cuando: 'Hoy', que: 'Contamos Sirena en TIC x26, en la Expo Rural y frente a cámara.' },
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

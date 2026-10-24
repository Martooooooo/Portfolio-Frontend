// Todo lo que se puede editar sin tocar el diseño está acá.

// Tu nombre, tal como querés que aparezca en la página.
export const NOMBRE = 'Martín Biosca';
export const NOMBRE_CORTO = 'Martín';

// Imágenes (en public/imagenes/). `pendiente` es lo que se muestra mientras la foto no está:
// describe qué foto va en ese lugar. Cuando subís el archivo, el recuadro desaparece solo.
export const IMAGENES = {
  sirena: { src: '/imagenes/sirena.jpg', alt: 'Ilustración de Sirena: una sirena con una baliza' },

  // Nuevas: todavía faltan.
  retrato: {
    src: '/imagenes/retrato.jpg',
    alt: `${NOMBRE_CORTO} presentando Sirena`,
    pendiente: 'Una foto tuya, vertical: presentando Sirena o con la credencial del evento.',
  },
  proyecto3ro: {
    src: '/imagenes/proyecto-3ro.jpg',
    alt: 'Captura del proyecto de 3.º año',
    pendiente: 'Captura del proyecto de 3.º, tal cual era.',
  },
  sirenaApp: {
    src: '/imagenes/sirena-app.jpg',
    alt: 'Captura de Sirena funcionando',
    pendiente: 'Captura de Sirena funcionando: el mapa de riesgo o una alerta.',
  },
  sirenaProceso: {
    src: '/imagenes/sirena-proceso.jpg',
    alt: 'El equipo trabajando en Sirena',
    pendiente: 'El equipo trabajando en Sirena: compus abiertas, pizarrón, una noche larga.',
  },
  presentando: {
    src: '/imagenes/presentando.jpg',
    alt: `${NOMBRE_CORTO} presentando Sirena frente al público`,
    pendiente: 'Vos presentando Sirena frente a un jurado o al público.',
  },

  equipoSirena: { src: '/imagenes/equipo-sirena.jpg', alt: 'El equipo de Sirena, de noche' },
  emprender: { src: '/imagenes/emprender.jpg', alt: 'Emprender como forma de aprender' },
  encuentro: { src: '/imagenes/encuentro.jpg', alt: 'Encuentro al aire libre con la bandera argentina' },
  saltoPelota: { src: '/imagenes/salto-pelota.jpg', alt: 'Salto por la pelota en un partido' },
  equipoBasquet: { src: '/imagenes/equipo-basquet.jpg', alt: 'El equipo de básquet de Platense en la cancha' },
  lanzamiento: { src: '/imagenes/lanzamiento.jpg', alt: 'Lanzamiento al aro' },
  escudo: { src: '/imagenes/escudo-cap.jpg', alt: 'Escudo del Club Atlético Platense' },
  cancha: { src: '/imagenes/cancha.jpg', alt: 'Cancha de básquet de Platense' },
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

// 03 · Sirena: cómo funciona, en tres pasos.
export const PASOS_SIRENA = [
  { titulo: 'Datos', texto: 'Lluvia, ríos y terreno: lo que pasa antes de que el agua suba.' },
  { titulo: 'Inteligencia artificial', texto: 'Un modelo que aprende de inundaciones pasadas para reconocer las señales.' },
  { titulo: 'Alerta', texto: 'Un mapa de riesgo que avisa a tiempo, para anticiparse y no reaccionar tarde.' },
];

// Tu aporte a Sirena, en una o dos oraciones. Vacío: se muestra «Próximamente».
export const MI_APORTE = '';

// 07 · Básquet. Los datos vacíos no se muestran en la ficha.
export const BASQUET = {
  club: 'Platense',
  dorsal: '17',
  posicion: '',
  categoria: '',
  desde: '',
  // Un recuerdo o anécdota de la cancha. Vacío: se muestra «Próximamente».
  recuerdo: '',
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
    texto: 'Después de una derrota hay otro partido. Después del proyecto de 3.º, vino Sirena.',
  },
];

// Mail o enlace de contacto (por ejemplo, 'mailto:yo@mail.com'). Vacío: se muestra «Próximamente».
export const CONTACTO = '';

// Redes. Las que quedan vacías no se muestran.
export const REDES = [
  { nombre: 'Instagram', url: '' },
  { nombre: 'LinkedIn', url: '' },
  { nombre: 'GitHub', url: '' },
];

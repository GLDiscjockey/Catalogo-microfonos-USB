import {
  antelopeEdgeNote,
  audixDp7,
  beyerdynamicTgDrumSet,
  dbxRtaM,
  electroVoiceRe20,
  royerR122,
} from "../../assets/microphones";

import {
  electroVoiceRe20Frequency,
  royerR122Frequency,
  dbxRtaMFrequency,
} from "../../assets/frequency";

import {
  electroVoiceRe20Polar,
  royerR122Polar,
  dbxRtaMPolar,
} from "../../assets/polar";



const other = [
  {
    id: 9,
    slug: "electro-voice-re20",

    marca: "Electro-Voice",
    modelo: "RE20",

    descripcion:
      "El Electro-Voice RE20 es un micrófono dinámico de gran diafragma ampliamente utilizado en radiodifusión, podcast y locución profesional. Su tecnología Variable-D reduce el efecto de proximidad y proporciona un sonido muy natural.",

    tipo: "Dinámico",
    diafragma: "Grande",
    patron: "Cardioide",

    rangoFrecuencia: "45 Hz – 18 kHz",
    sensibilidad: "1.5 mV/Pa",
    impedanciaSalida: "150 Ω",
    splMaximo: ">160 dB SPL",
    phantom: "No",

    aplicaciones: [
      "Podcast",
      "Broadcast",
      "Locución",
      "Bombo",
      "Bajo"
    ],

    ventajas: [
      "Muy bajo efecto de proximidad",
      "Excelente claridad vocal",
      "Muy utilizado en radio",
      "Construcción robusta"
    ],

    desventajas: [
      "Peso elevado",
      "Requiere bastante ganancia del preamplificador"
    ],

    imagen: electroVoiceRe20,

    patronPolar: electroVoiceRe20Polar,
    graficaRespuesta: electroVoiceRe20Frequency,
  },

  {
    id: 17,
    slug: "antelope-edge-note",

    marca: "Antelope",
    modelo: "Edge Note",

    descripcion:
      "Micrófono de condensador de pequeño diafragma diseñado para capturar instrumentos acústicos con gran precisión. Compatible con modelado de micrófonos mediante Antelope Audio.",

    tipo: "Condensador",
    diafragma: "Pequeño",
    patron: "Cardioide",

    rangoFrecuencia: "20 Hz – 20 kHz",
    sensibilidad: "12.5 mV/Pa",
    impedanciaSalida: "65 Ω",
    splMaximo: "146 dB SPL",
    phantom: "Sí (+48 V)",

    aplicaciones: [
      "Guitarra acústica",
      "Overheads",
      "Piano",
      "Cuerdas",
      "Percusión"
    ],

    ventajas: [
      "Muy detallado",
      "Compatible con modelado",
      "Excelente respuesta a transitorios",
      "Bajo ruido"
    ],

    desventajas: [
      "Necesita alimentación phantom",
      "Depende del ecosistema Antelope para aprovechar todo su potencial"
    ],

    imagen: antelopeEdgeNote,

    patronPolar: null,
    graficaRespuesta: null,
  },

  {
    id: 20,
    slug: "royer-r122",

    marca: "Royer",
    modelo: "R-122",

    descripcion:
      "El Royer R-122 es un micrófono de cinta activo reconocido por su sonido cálido y natural. Es ampliamente utilizado para guitarras eléctricas, metales y grabaciones de estudio de alta gama.",

    tipo: "Cinta",
    diafragma: "Cinta",
    patron: "Bidireccional",

    rangoFrecuencia: "30 Hz – 15 kHz",
    sensibilidad: "-36 dBV/Pa",
    impedanciaSalida: "200 Ω",
    splMaximo: "135 dB SPL",
    phantom: "Sí (+48 V)",

    aplicaciones: [
      "Amplificador de guitarra",
      "Metales",
      "Cuerdas",
      "Overheads",
      "Voz de estudio"
    ],

    ventajas: [
      "Sonido muy natural",
      "Respuesta suave en altas frecuencias",
      "Excelente para estudio",
      "Tecnología de cinta activa"
    ],

    desventajas: [
      "Precio elevado",
      "Más delicado que un dinámico"
    ],

    imagen: royerR122,

    patronPolar: royerR122Polar,
    graficaRespuesta: royerR122Frequency,
  },

  {
    id: 23,
    slug: "dbx-rtam",

    marca: "dbx",
    modelo: "RTA-M",

    descripcion:
      "Micrófono de medición de condensador omnidireccional diseñado para análisis acústico y calibración de sistemas de sonido mediante analizadores en tiempo real.",

    tipo: "Condensador",
    diafragma: "Pequeño",
    patron: "Omnidireccional",

    rangoFrecuencia: "20 Hz – 20 kHz",
    sensibilidad: "10 mV/Pa",
    impedanciaSalida: "250 Ω",
    splMaximo: "132 dB SPL",
    phantom: "Sí (+15 a +48 V)",

    aplicaciones: [
      "Medición acústica",
      "Calibración",
      "Sistemas PA",
      "RTA",
      "Laboratorio"
    ],

    ventajas: [
      "Respuesta muy plana",
      "Ideal para mediciones",
      "Alta precisión",
      "Compacto"
    ],

    desventajas: [
      "No está diseñado para grabación musical",
      "Requiere alimentación phantom"
    ],

    imagen: dbxRtaM,

    patronPolar: dbxRtaMPolar,
    graficaRespuesta: dbxRtaMFrequency,
  },

  {
    id: 24,
    slug: "beyerdynamic-tgdrum-set",

    marca: "Beyerdynamic",
    modelo: "TG Drum Set",

    descripcion:
      "Kit profesional de micrófonos diseñado para la captación completa de baterías acústicas en estudio y sonido en vivo.",

    tipo: "Dinámico",
    diafragma: "Variable según el micrófono",
    patron: "Cardioide / Hipercardioide",

    rangoFrecuencia: "Variable según el modelo",
    sensibilidad: "Variable",
    impedanciaSalida: "Variable",
    splMaximo: ">150 dB SPL",
    phantom: "Solo los condensadores del kit",

    aplicaciones: [
      "Batería completa",
      "Caja",
      "Toms",
      "Bombo",
      "Overheads"
    ],

    ventajas: [
      "Kit completo",
      "Excelente calidad",
      "Fácil instalación",
      "Ideal para directo"
    ],

    desventajas: [
      "Precio elevado",
      "Las especificaciones dependen de cada micrófono"
    ],

    imagen: beyerdynamicTgDrumSet,

    patronPolar: null,
    graficaRespuesta: null,
  },

  {
    id: 25,
    slug: "audix-dp7",

    marca: "Audix",
    modelo: "DP7",

    descripcion:
      "Kit profesional de micrófonos diseñado para la captación de baterías en estudio y directo. Incluye micrófonos específicos para bombo, caja, toms y overheads.",

    tipo: "Dinámico",
    diafragma: "Variable según el micrófono",
    patron: "Cardioide / Hipercardioide",

    rangoFrecuencia: "Variable según el modelo",
    sensibilidad: "Variable",
    impedanciaSalida: "Variable",
    splMaximo: ">144 dB SPL",
    phantom: "Solo los condensadores del kit",

    aplicaciones: [
      "Batería completa",
      "Caja",
      "Toms",
      "Bombo",
      "Overheads"
    ],

    ventajas: [
      "Kit profesional",
      "Muy utilizado en directo",
      "Excelente relación calidad-precio",
      "Incluye estuche"
    ],

    desventajas: [
      "Las especificaciones dependen de cada micrófono",
      "Ocupa más espacio que comprar micrófonos individuales"
    ],

    imagen: audixDp7,

    patronPolar: null,
    graficaRespuesta: null,
  },
];

export default other;
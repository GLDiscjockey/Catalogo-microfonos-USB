import {
  akgD112,
  akgC451B,
  akgC414Xls,
} from "../../assets/microphones";
import {
  akgD112Frequency,
  akgC451BFrequency,
   akgC414XlsOmniFrequency,
  akgC414XlsWideCardioidFrequency,
  akgC414XlsCardioidFrequency,
  akgC414XlsHypercardioidFrequency,
  akgC414XlsFigure8Frequency,
} from "../../assets/frequency";

import {
  akgD112Polar,
  akgC451BPolar,
   akgC414XlsOmniPolar,
  akgC414XlsWideCardioidPolar,
  akgC414XlsCardioidPolar,
  akgC414XlsHypercardioidPolar,
  akgC414XlsFigure8Polar,
} from "../../assets/polar";
const akg = [
  {
  id: 8,
  slug: "akg-d112",

  marca: "AKG",
  modelo: "D112",

  descripcion:
    "El AKG D112 es un micrófono dinámico de gran diafragma diseñado para captar fuentes con abundante contenido en bajas frecuencias. Es ampliamente utilizado en bombos, bajos y amplificadores gracias a su capacidad para soportar niveles extremadamente altos de presión sonora.",

  tipo: "Dinámico",
  diafragma: "Grande",
  patron: "Cardioide",

  rangoFrecuencia: "20 Hz – 17 kHz",
  sensibilidad: "1.8 mV/Pa",
  impedanciaSalida: "210 Ω",
  splMaximo: ">160 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Bombo",
    "Bajo eléctrico",
    "Gabinete de bajo",
    "Trombón",
    "Tuba"
  ],

  ventajas: [
    "Excelente respuesta en bajas frecuencias",
    "Muy resistente",
    "Soporta altos niveles de presión sonora",
    "Sonido clásico para bombo"
  ],

  desventajas: [
    "No es adecuado para voces",
    "Respuesta menos detallada en altas frecuencias"
  ],

  imagen: akgD112,

  patronPolar: akgD112Polar,
  graficaRespuesta: akgD112Frequency,
},
  {
  id: 21,
  slug: "akg-c451b",

  marca: "AKG",
  modelo: "C451 B",

  descripcion:
    "El AKG C451 B es un micrófono de condensador de pequeño diafragma reconocido por su excelente respuesta a transitorios y gran definición. Es una opción muy utilizada para overheads, guitarras acústicas y platillos.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "9 mV/Pa",
  impedanciaSalida: "50 Ω",
  splMaximo: "155 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Overheads",
    "Guitarra acústica",
    "Platillos",
    "Hi-hat",
    "Piano"
  ],

  ventajas: [
    "Gran respuesta a transitorios",
    "Muy detallado",
    "Bajo ruido propio",
    "Excelente para instrumentos acústicos"
  ],

  desventajas: [
    "Requiere alimentación phantom",
    "Más sensible al ruido ambiente"
  ],

  imagen: akgC451B,

  patronPolar: akgC451BPolar,
  graficaRespuesta: akgC451BFrequency,
},
{
  id: 22,
  slug: "akg-c414xls",

  marca: "AKG",
  modelo: "C414 XLS",

  descripcion:
    "El AKG C414 XLS es uno de los micrófonos de condensador multipatrón más versátiles del mercado. Gracias a sus múltiples patrones polares, filtros y atenuadores, es una herramienta ideal para voces, instrumentos acústicos y grabaciones de estudio de alta calidad.",

  tipo: "Condensador",
  diafragma: "Grande",
  patron: "Multipatrón",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "23 mV/Pa",
  impedanciaSalida: "200 Ω",
  splMaximo: "158 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Voz de estudio",
    "Piano",
    "Guitarra acústica",
    "Overheads",
    "Orquesta"
  ],

  ventajas: [
    "Nueve patrones polares",
    "Muy versátil",
    "Calidad profesional de estudio",
    "Excelente rango dinámico"
  ],

  desventajas: [
    "Precio elevado",
    "Requiere alimentación phantom"
  ],
  

  imagen: akgC414Xls,
patronesPolares: [
  {
    nombre: "Omnidireccional",
    frecuencia: akgC414XlsOmniFrequency,
    polar: akgC414XlsOmniPolar,
  },
  {
    nombre: "Cardioide amplio",
    frecuencia: akgC414XlsWideCardioidFrequency,
    polar: akgC414XlsWideCardioidPolar,
  },
  {
    nombre: "Cardioide",
    frecuencia: akgC414XlsCardioidFrequency,
    polar: akgC414XlsCardioidPolar,
  },
  {
    nombre: "Hipercardioide",
    frecuencia: akgC414XlsHypercardioidFrequency,
    polar: akgC414XlsHypercardioidPolar,
  },
  {
    nombre: "Figura de 8",
    frecuencia: akgC414XlsFigure8Frequency,
    polar: akgC414XlsFigure8Polar,
  },
],
},
  

];

export default akg;
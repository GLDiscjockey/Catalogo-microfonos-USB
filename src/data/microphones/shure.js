import {
  shureSm57Frequency,
  shureSm7BFrequency,
  shureSm87AFrequency,
  shureSm58Frequency,
} from "../../assets/frequency";

import {
  shureSm57Polar,
  shureSm7BPolar,
  shureSm87APolar,
  shureSm58Polar,
} from "../../assets/polar";

import {
  shureSm57,
  
  shureSm7B,
  shureSm87A,
  shureBeta57A,
  shureBeta58A,
  shureSuper55,
  shureSm58,
} from "../../assets/microphones";

import {
  shureBeta57AFrequency,
  shureBeta58AFrequency,
  shureSuper55Frequency,
} from "../../assets/frequency";

import {
  shureBeta57APolar,
  shureBeta58APolar,
  shureSuper55Polar,
} from "../../assets/polar";

const shure = [
{
  id: 6,
  slug: "shure-beta57a",

  marca: "Shure",
  modelo: "Beta 57A",

  descripcion:
    "El Shure Beta 57A es un micrófono dinámico supercardioide diseñado para aplicaciones profesionales de sonido en vivo y estudio. Ofrece mayor sensibilidad y mejor aislamiento que el SM57, proporcionando una captación más precisa y detallada.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "50 Hz – 16 kHz",
  sensibilidad: "-51 dBV/Pa (2.8 mV)",
  impedanciaSalida: "290 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Caja",
    "Toms",
    "Amplificador de guitarra",
    "Metales",
    "Voz en vivo"
  ],

  ventajas: [
    "Mayor sensibilidad que el SM57",
    "Excelente rechazo fuera del eje",
    "Muy resistente",
    "Gran claridad en instrumentos"
  ],

  desventajas: [
    "Patrón supercardioide requiere una mejor colocación",
    "Menos versátil que el SM57 en algunas aplicaciones"
  ],

  imagen: shureBeta57A,

  patronPolar: shureBeta57APolar,
  graficaRespuesta: shureBeta57AFrequency,
},
{
  id: 11,
  slug: "shure-sm87a",

  marca: "Shure",
  modelo: "SM87A",

  descripcion:
    "El Shure SM87A es un micrófono de condensador supercardioide diseñado para voces profesionales en escenarios y aplicaciones de broadcast. Ofrece una respuesta en frecuencia amplia, gran claridad y un excelente rechazo al ruido ambiente.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "50 Hz – 20 kHz",
  sensibilidad: "-52.5 dBV/Pa (2.4 mV)",
  impedanciaSalida: "150 Ω",
  splMaximo: "140 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Voz principal",
    "Coros",
    "Broadcast",
    "Conferencias",
    "Presentaciones en vivo"
  ],

  ventajas: [
    "Gran claridad y detalle",
    "Excelente respuesta en altas frecuencias",
    "Buen rechazo al ruido fuera del eje",
    "Ideal para voces profesionales"
  ],

  desventajas: [
    "Requiere alimentación phantom",
    "Más sensible al manejo que un micrófono dinámico"
  ],

  imagen: shureSm87A,

  patronPolar: shureSm87APolar,
  graficaRespuesta: shureSm87AFrequency,
},
{
  id: 12,
  slug: "shure-sm7b",

  marca: "Shure",
  modelo: "SM7B",

  descripcion:
    "El Shure SM7B es un micrófono dinámico cardioide de calidad profesional, ampliamente utilizado para radiodifusión, podcast, locución y grabación de voces e instrumentos. Destaca por su sonido cálido, natural y excelente rechazo al ruido ambiente.",

  tipo: "Dinámico",
  diafragma: "Grande",
  patron: "Cardioide",

  rangoFrecuencia: "50 Hz – 20 kHz",
  sensibilidad: "-59 dBV/Pa (1.12 mV)",
  impedanciaSalida: "150 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Podcast",
    "Locución",
    "Broadcast",
    "Voz de estudio",
    "Amplificador de guitarra"
  ],

  ventajas: [
    "Sonido cálido y natural",
    "Excelente rechazo al ruido ambiente",
    "Muy utilizado en radio y podcast",
    "Gran rendimiento con voces"
  ],

  desventajas: [
    "Necesita bastante ganancia del preamplificador",
    "Es más pesado que otros micrófonos dinámicos"
  ],

  imagen: shureSm7B,

  patronPolar: shureSm7BPolar,
  graficaRespuesta: shureSm7BFrequency,
},
{
  id: 13,
  slug: "shure-sm57",

  marca: "Shure",
  modelo: "SM57",

  descripcion:
    "El Shure SM57 es un micrófono dinámico cardioide ampliamente utilizado en estudio y sonido en vivo. Es reconocido por su robustez, su versatilidad y su capacidad para soportar niveles muy altos de presión sonora.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "40 Hz – 15 kHz",
  sensibilidad: "-56 dBV/Pa (1.6 mV)",
  impedanciaSalida: "150 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Voz en vivo",
    "Caja",
    "Amplificador de guitarra",
    "Metales",
    "Percusión"
  ],

  ventajas: [
    "Muy resistente",
    "Excelente rechazo fuera del eje",
    "Soporta altos niveles de presión sonora",
    "Muy versátil"
  ],

  desventajas: [
    "Menor nivel de detalle que un condensador",
    "Requiere más ganancia del preamplificador"
  ],

  imagen: shureSm57,

  patronPolar: shureSm57Polar,
  graficaRespuesta: shureSm57Frequency,
},
{
  id: 14,
  slug: "shure-super55",

  marca: "Shure",
  modelo: "Super 55",

  descripcion:
    "El Shure Super 55 Deluxe es un micrófono dinámico supercardioide inspirado en el clásico diseño vintage de Shure. Combina una estética icónica con un excelente rendimiento para voces en vivo, ofreciendo gran presencia y un eficaz rechazo a la realimentación.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "60 Hz – 17 kHz",
  sensibilidad: "-53 dBV/Pa (2.2 mV)",
  impedanciaSalida: "150 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Voz principal",
    "Presentaciones en vivo",
    "Rock",
    "Blues",
    "Eventos retro y escénicos"
  ],

  ventajas: [
    "Diseño clásico e icónico",
    "Excelente presencia vocal",
    "Buen rechazo a la realimentación",
    "Construcción muy robusta"
  ],

  desventajas: [
    "Más pesado que un micrófono vocal convencional",
    "No es la opción más versátil para instrumentos"
  ],

  imagen: shureSuper55,

  patronPolar: shureSuper55Polar,
  graficaRespuesta: shureSuper55Frequency,
},
{
  id: 15,
  slug: "shure-beta58a",

  marca: "Shure",
  modelo: "Beta 58A",

  descripcion:
    "El Shure Beta 58A es un micrófono dinámico supercardioide diseñado para voces profesionales en aplicaciones de sonido en vivo. Ofrece una mayor presencia, claridad y rechazo al ruido fuera del eje en comparación con el SM58.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "50 Hz – 16 kHz",
  sensibilidad: "-51.5 dBV/Pa (2.66 mV)",
  impedanciaSalida: "290 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Voz principal",
    "Coros",
    "Presentaciones en vivo",
    "Conferencias",
    "Locución"
  ],

  ventajas: [
    "Excelente presencia vocal",
    "Gran rechazo al ruido ambiente",
    "Muy resistente",
    "Alta ganancia antes de la realimentación"
  ],

  desventajas: [
    "Menos tolerante a una mala posición por su patrón supercardioide",
    "No es la mejor opción para instrumentos"
  ],

  imagen: shureBeta58A,

  patronPolar: shureBeta58APolar,
  graficaRespuesta: shureBeta58AFrequency,
},
{
  id: 16,
  slug: "shure-sm58",

  marca: "Shure",
  modelo: "SM58",

  descripcion:
    "El Shure SM58 es un micrófono dinámico cardioide diseñado principalmente para aplicaciones vocales en directo. Su construcción robusta, respuesta vocal equilibrada y capacidad para rechazar el sonido fuera del eje lo han convertido en uno de los micrófonos más utilizados para voz.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "50 Hz – 15 kHz",
  sensibilidad: "1.85 mV/Pa",
  impedanciaSalida: "150 Ω",
  splMaximo: ">150 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Voz en vivo",
    "Coros",
    "Presentaciones",
    "Conferencias",
    "Locución"
  ],

  ventajas: [
    "Excelente para voces",
    "Gran rechazo del sonido fuera del eje",
    "Muy resistente",
    "Reduce el ruido de manipulación",
    "Respuesta vocal equilibrada"
  ],

  desventajas: [
    "Respuesta en frecuencia limitada frente a micrófonos de condensador",
    "Menor detalle en altas frecuencias",
    "No es la opción ideal para grabaciones que requieren máxima precisión"
  ],

  imagen: shureSm58,
  patronPolar: shureSm58Polar,
  graficaRespuesta: shureSm58Frequency,
},
];

export default shure;
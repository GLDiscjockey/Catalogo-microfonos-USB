import {
  neumannKm184,
  neumannKms105,
  neumannU87Ai,
} from "../../assets/microphones";
import {
  neumannKm184Frequency,
  neumannKms105Frequency,
  neumannU87CardioidFrequency,
  neumannU87OmniFrequency,
  neumannU87Figure8Frequency,
} from "../../assets/frequency";

import {
  neumannKm184Polar,
  neumannKms105Polar,
  neumannU87CardioidPolar,
  neumannU87OmniPolar,
  neumannU87Figure8Polar,
} from "../../assets/polar";
const neumann = [
  {
  id: 16,
  slug: "neumann-km184",

  marca: "Neumann",
  modelo: "KM 184",

  descripcion:
    "El Neumann KM 184 es un micrófono de condensador de pequeño diafragma ampliamente utilizado en grabaciones profesionales. Destaca por su respuesta en frecuencia lineal, excelente reproducción de transitorios y muy bajo nivel de ruido propio.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "15 mV/Pa",
  impedanciaSalida: "50 Ω",
  splMaximo: "138 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Guitarra acústica",
    "Piano",
    "Overheads",
    "Cuerdas",
    "Percusión"
  ],

  ventajas: [
    "Respuesta muy natural",
    "Excelente reproducción de transitorios",
    "Muy bajo ruido propio",
    "Calidad profesional de estudio"
  ],

  desventajas: [
    "Precio elevado",
    "Requiere alimentación phantom"
  ],

  imagen: neumannKm184,

  patronPolar: neumannKm184Polar,
  graficaRespuesta: neumannKm184Frequency,
},
  {
  id: 18,
  slug: "neumann-kms105",

  marca: "Neumann",
  modelo: "KMS 105",

  descripcion:
    "El Neumann KMS 105 es un micrófono de condensador supercardioide diseñado para voces en vivo. Combina la calidad sonora característica de Neumann con una excelente resistencia a la realimentación y un gran nivel de detalle.",

  tipo: "Condensador",
  diafragma: "Grande",
  patron: "Supercardioide",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "4.5 mV/Pa",
  impedanciaSalida: "50 Ω",
  splMaximo: "150 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Voz principal",
    "Coros",
    "Broadcast",
    "Conciertos",
    "Presentaciones en vivo"
  ],

  ventajas: [
    "Calidad de estudio en directo",
    "Excelente claridad",
    "Muy buen rechazo a la realimentación",
    "Respuesta muy equilibrada"
  ],

  desventajas: [
    "Precio elevado",
    "Requiere alimentación phantom"
  ],

  imagen: neumannKms105,

  patronPolar: neumannKms105Polar,
  graficaRespuesta: neumannKms105Frequency,
},
 {
  id: 19,
  slug: "neumann-u87",

  marca: "Neumann",
  modelo: "U87 Ai",

  descripcion:
    "El Neumann U87 Ai es uno de los micrófonos de condensador más reconocidos del mundo. Su diseño multipatrón y su sonido equilibrado lo convierten en un estándar para grabación de voces, locución e instrumentos en estudios profesionales.",

  tipo: "Condensador",
  diafragma: "Grande",
  patron: "Multipatrón",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "28 mV/Pa",
  impedanciaSalida: "200 Ω",
  splMaximo: "127 dB SPL (hasta 137 dB con pad)",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Voz de estudio",
    "Locución",
    "Piano",
    "Cuerdas",
    "Instrumentos acústicos"
  ],

  ventajas: [
    "Sonido de referencia en estudio",
    "Tres patrones polares",
    "Muy bajo ruido propio",
    "Gran versatilidad"
  ],

  desventajas: [
    "Precio muy elevado",
    "Requiere alimentación phantom"
  ],

  imagen: neumannU87Ai,

patronesPolares: [
  {
    nombre: "Cardioide",
    frecuencia: neumannU87CardioidFrequency,
    polar: neumannU87CardioidPolar,
  },
  {
    nombre: "Omnidireccional",
    frecuencia: neumannU87OmniFrequency,
    polar: neumannU87OmniPolar,
  },
  {
    nombre: "Figura de 8",
    frecuencia: neumannU87Figure8Frequency,
    polar: neumannU87Figure8Polar,
  },
],
},
];

export default neumann;
import {
  sennheiserE614Frequency,
  sennheiserE835Frequency,
  sennheiserE904Frequency,
  sennheiserE905Frequency,
  sennheiserE906Frequency,
  sennheiserE914Frequency,
  sennheiserMd421Frequency,
  sennheiserMe66Frequency,
  sennheiserE902Frequency,   
} from "../../assets/frequency";

import {
  sennheiserE614Polar,
  sennheiserE835Polar,
  sennheiserE904Polar,
  sennheiserE905Polar,
  sennheiserE906Polar,
  sennheiserE914Polar,
  sennheiserMd421Polar,
  sennheiserMe66Polar,
  sennheiserE902Polar,
} from "../../assets/polar";
import {
  sennheiserE614,
  sennheiserE835,
  sennheiserE904,
  sennheiserE905,
  sennheiserE906,
  sennheiserE914,
  sennheiserMd421,
  sennheiserMe66,
  sennheiserE902,
} from "../../assets/microphones";

const sennheiser = [
 {
  id: 1,
  slug: "sennheiser-e906",

  marca: "Sennheiser",
  modelo: "e906",

  descripcion:
    "El Sennheiser e906 es un micrófono dinámico supercardioide diseñado especialmente para amplificadores de guitarra eléctrica, aunque también ofrece un excelente rendimiento en cajas de batería, percusión y metales. Su respuesta en frecuencia permite seleccionar diferentes características tonales mediante un filtro conmutable.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "40 Hz – 18 kHz",
  sensibilidad: "2.2 mV/Pa (-53 dBV)",
  impedanciaSalida: "350 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Amplificador de guitarra",
    "Caja",
    "Toms",
    "Metales",
    "Percusión"
  ],

  ventajas: [
    "Excelente para amplificadores de guitarra",
    "Soporta altos niveles de presión sonora",
    "Filtro de presencia conmutable",
    "No necesita soporte gracias a su diseño plano"
  ],

  desventajas: [
    "No es la mejor opción para voces",
    "Su carácter sonoro está orientado principalmente a instrumentos"
  ],

  imagen: sennheiserE906,

  patronPolar: sennheiserE906Polar,
  graficaRespuesta: sennheiserE906Frequency,
},
 {
  id: 2,
  slug: "sennheiser-e914",

  marca: "Sennheiser",
  modelo: "e914",

  descripcion:
    "Micrófono de condensador de pequeño diafragma diseñado para instrumentos acústicos, overheads de batería y grabaciones donde se requiere una respuesta muy precisa y natural.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "20 Hz – 20 kHz",
  sensibilidad: "7 mV/Pa",
  impedanciaSalida: "100 Ω",
  splMaximo: "157 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Overheads",
    "Hi-hat",
    "Platillos",
    "Guitarra acústica",
    "Piano"
  ],

  ventajas: [
    "Respuesta muy plana",
    "Excelente detalle",
    "Muy bajo ruido propio",
    "Gran precisión en transitorios"
  ],

  desventajas: [
    "Requiere alimentación phantom",
    "Más sensible al ruido ambiental"
  ],

  imagen: sennheiserE914,

  patronPolar: sennheiserE914Polar,
  graficaRespuesta: sennheiserE914Frequency,
},
  {
  id: 3,
  slug: "sennheiser-md421",

  marca: "Sennheiser",
  modelo: "MD 421",

  descripcion:
    "El MD 421 es uno de los micrófonos dinámicos más reconocidos de la industria. Es ampliamente utilizado para toms, amplificadores de guitarra, metales y locución gracias a su sonido natural y su capacidad para soportar altos niveles de presión sonora.",

  tipo: "Dinámico",
  diafragma: "Grande",
  patron: "Cardioide",

  rangoFrecuencia: "30 Hz – 17 kHz",
  sensibilidad: "2 mV/Pa",
  impedanciaSalida: "200 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Toms",
    "Amplificador de guitarra",
    "Locución",
    "Metales",
    "Percusión"
  ],

  ventajas: [
    "Sonido muy natural",
    "Gran versatilidad",
    "Excelente respuesta en graves",
    "Muy robusto"
  ],

  desventajas: [
    "Pinza de montaje poco práctica",
    "Precio superior al promedio"
  ],

  imagen: sennheiserMd421,

  patronPolar: sennheiserMd421Polar,
  graficaRespuesta: sennheiserMd421Frequency,
},
 {
  id: 4,
  slug: "sennheiser-e904",

  marca: "Sennheiser",
  modelo: "e904",

  descripcion:
    "Micrófono dinámico cardioide compacto diseñado especialmente para toms y cajas de batería. Su pinza integrada facilita una instalación rápida directamente sobre el aro del tambor.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "40 Hz – 18 kHz",
  sensibilidad: "2 mV/Pa",
  impedanciaSalida: "350 Ω",
  splMaximo: ">170 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Toms",
    "Caja",
    "Percusión",
    "Congas",
    "Amplificadores"
  ],

  ventajas: [
    "Muy compacto",
    "Pinza integrada",
    "Excelente rechazo",
    "Gran resistencia"
  ],

  desventajas: [
    "No es el mejor para voces",
    "Respuesta menos extensa que un condensador"
  ],

  imagen: sennheiserE904,

  patronPolar: sennheiserE904Polar,
  graficaRespuesta: sennheiserE904Frequency,
},
 {
  id: 5,
  slug: "sennheiser-e835",

  marca: "Sennheiser",
  modelo: "e835",

  descripcion:
    "El Sennheiser e835 es un micrófono dinámico cardioide diseñado para voz en vivo, conferencias y presentaciones. Ofrece un sonido claro, natural y una excelente resistencia a la realimentación.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Cardioide",

  rangoFrecuencia: "40 Hz – 16 kHz",
  sensibilidad: "2.7 mV/Pa",
  impedanciaSalida: "350 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Voz en vivo",
    "Conferencias",
    "Coros",
    "Presentaciones",
    "Locución"
  ],

  ventajas: [
    "Sonido claro y natural",
    "Excelente rechazo a la realimentación",
    "Muy resistente",
    "Buena relación calidad-precio"
  ],

  desventajas: [
    "Menor detalle que un condensador",
    "No está diseñado para estudio de alta fidelidad"
  ],

  imagen: sennheiserE835,

  patronPolar: sennheiserE835Polar,
  graficaRespuesta: sennheiserE835Frequency,
},
 {
  id: 7,
  slug: "sennheiser-e905",

  marca: "Sennheiser",
  modelo: "e905",

  descripcion:
    "Micrófono dinámico supercardioide diseñado para cajas de batería, amplificadores y otros instrumentos con altos niveles de presión sonora. Destaca por su ataque preciso y excelente aislamiento.",

  tipo: "Dinámico",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "40 Hz – 18 kHz",
  sensibilidad: "2.5 mV/Pa",
  impedanciaSalida: "350 Ω",
  splMaximo: ">180 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Caja",
    "Amplificador de guitarra",
    "Percusión",
    "Metales",
    "Toms"
  ],

  ventajas: [
    "Excelente definición",
    "Muy buen rechazo lateral",
    "Alta resistencia",
    "Gran respuesta en transitorios"
  ],

  desventajas: [
    "Menos adecuado para voces",
    "Patrón supercardioide requiere mejor posicionamiento"
  ],

  imagen: sennheiserE905,

  patronPolar: sennheiserE905Polar,
  graficaRespuesta: sennheiserE905Frequency,
},
 {
  id: 10,
  slug: "sennheiser-e614",

  marca: "Sennheiser",
  modelo: "e614",

  descripcion:
    "Micrófono de condensador de pequeño diafragma especialmente diseñado para overheads, platillos e instrumentos acústicos. Ofrece una respuesta rápida a transitorios y una reproducción muy detallada.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "40 Hz – 20 kHz",
  sensibilidad: "3 mV/Pa",
  impedanciaSalida: "50 Ω",
  splMaximo: "139 dB SPL",
  phantom: "Sí (+48 V)",

  aplicaciones: [
    "Overheads",
    "Platillos",
    "Hi-hat",
    "Cuerdas",
    "Instrumentos acústicos"
  ],

  ventajas: [
    "Excelente respuesta en agudos",
    "Muy buena respuesta a transitorios",
    "Compacto",
    "Ideal para overheads"
  ],

  desventajas: [
    "Requiere alimentación phantom",
    "Más sensible al ruido ambiental"
  ],

  imagen: sennheiserE614,

  patronPolar: sennheiserE614Polar,
  graficaRespuesta: sennheiserE614Frequency,
},
{
  id: 26,
  slug: "sennheiser-me66",
  marca: "Sennheiser",
  modelo: "ME 66",

  descripcion:
    "Módulo de micrófono shotgun corto diseñado para utilizarse con los módulos de alimentación Sennheiser K6 y K6P. Su alta directividad permite captar fuentes sonoras a distancia mientras reduce el sonido proveniente de los laterales, siendo especialmente útil en producciones audiovisuales, entrevistas y grabaciones en exteriores.",

  tipo: "Condensador",
  diafragma: "Pequeño",
  patron: "Supercardioide",

  rangoFrecuencia: "40 Hz – 20 kHz",
  sensibilidad: "50 mV/Pa",
  impedanciaSalida: "200 Ω",
  splMaximo: "126 dB SPL",
  phantom: "Mediante módulo K6/K6P",

  aplicaciones: [
    "Grabación audiovisual",
    "Cine y televisión",
    "Entrevistas",
    "Reportajes",
    "Grabación en exteriores",
    "Captación de sonido a distancia",
  ],

  ventajas: [
    "Alta directividad",
    "Buena sensibilidad",
    "Adecuado para captación a distancia",
    "Diseño compacto para un micrófono shotgun",
    "Compatible con el sistema modular Sennheiser K6",
  ],

  desventajas: [
    "Requiere un módulo de alimentación K6 o K6P",
    "No es un micrófono completo por sí solo",
    "La alta direccionalidad exige una orientación precisa",
  ],

  imagen: sennheiserMe66,
  graficaRespuesta: sennheiserMe66Frequency,
  patronPolar: sennheiserMe66Polar,
},

{
  id: 27,
  slug: "sennheiser-e902",

  marca: "Sennheiser",
  modelo: "e 902",

  descripcion:
    "El Sennheiser e 902 es un micrófono dinámico cardioide diseñado especialmente para bombo y otras fuentes de baja frecuencia. Su respuesta y construcción permiten soportar altos niveles de presión sonora y obtener una captación definida y potente en instrumentos de percusión.",

  tipo: "Dinámico",
  diafragma: "Grande",
  patron: "Cardioide",

  rangoFrecuencia: "20 Hz – 18 kHz",
  sensibilidad: "0.2 mV/Pa",
  impedanciaSalida: "350 Ω",
  splMaximo: ">160 dB SPL",
  phantom: "No",

  aplicaciones: [
    "Bombo",
    "Tom de piso",
    "Percusión",
    "Amplificadores de bajo",
    "Fuentes de baja frecuencia",
  ],

  ventajas: [
    "Excelente para bombo",
    "Respuesta optimizada para bajas frecuencias",
    "Soporta altos niveles de presión sonora",
    "Patrón cardioide con buen rechazo lateral",
    "Construcción robusta",
  ],

  desventajas: [
    "Diseñado principalmente para fuentes de baja frecuencia",
    "Menor versatilidad que un micrófono de propósito general",
    "Su respuesta está orientada principalmente a aplicaciones de percusión",
  ],

  imagen: sennheiserE902,
  patronPolar: sennheiserE902Polar,
  graficaRespuesta: sennheiserE902Frequency,
},
];

export default sennheiser;
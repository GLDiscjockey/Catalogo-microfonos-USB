import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import microphones from "../data/microphones/index";
import SpecRow from "../components/details/SpecRow";
import ImageCard from "../components/details/Imagecard";
import TechnicalSpecs from "../components/details/TechnicalSpecs";
import PatternSelector from "../components/details/PatternSelector";
import ImageModal from "../components/common/ImageModal";
import { ArrowLeft } from "lucide-react";
import CompareButton from "../components/details/CompareButton";
import CompareTable from "../components/details/CompareTable";
function Details() {
  const { id } = useParams();

  const microphone = microphones.find(
    (mic) => mic.id === Number(id)
  );
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImage, setModalImage] = useState(null);
const [compareMic, setCompareMic] = useState(null);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 const currentFrequency =
  microphone?.patronesPolares
    ? microphone.patronesPolares[selectedPattern].frecuencia
    : microphone?.graficaRespuesta;

const currentPolar =
  microphone?.patronesPolares
    ? microphone.patronesPolares[selectedPattern].polar
    : microphone?.patronPolar;
    const openImage = (image) => {
  setModalImage(image);
  setIsModalOpen(true);
};
  if (!microphone) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-10 text-white">
        <h1 className="text-3xl font-bold">
          Micrófono no encontrado
        </h1>

        <Link
          to="/"
          className="text-blue-400 mt-6 inline-block"
        >
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
<main className="max-w-7xl mx-auto px-6 py-10 text-white">

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={18} />
        Volver al catálogo
      </Link>

    <section className="grid lg:grid-cols-2 gap-10 mt-8">

<ImageCard
  microphone={microphone}
  onImageClick={openImage}
/>

  <div>

    <p className="uppercase tracking-[4px] text-gray-500">
      {microphone.marca}
    </p>

    <h1 className="text-5xl font-bold mt-2">
      {microphone.modelo}
    </h1>

    <div className="flex gap-3 mt-6">

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        {microphone.tipo}
      </span>

      <span className="bg-[#3A3A3A] px-4 py-2 rounded-full">
        {microphone.patron || "Sin definir"}
      </span>

    </div>
<CompareButton
  microphone={microphone}
  onCompare={setCompareMic}
/>

    <p className="mt-8 text-gray-300 leading-8">
      {microphone.descripcion ||
        "Este micrófono aún no tiene una descripción registrada en el catálogo."}
    </p>

  </div>

</section>   {/* ← ESTE CIERRE FALTA */}

<TechnicalSpecs microphone={microphone} />

<PatternSelector
  patronesPolares={microphone.patronesPolares}
  selectedPattern={selectedPattern}
  setSelectedPattern={setSelectedPattern}
/>

{/* Gráficas */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

  {/* Respuesta en frecuencia */}

  <section className="bg-[#2B2B2B] rounded-2xl p-6">

    <h2 className="text-xl font-semibold text-white mb-4">
      📈 Respuesta en frecuencia
    </h2>

    <div className="bg-white rounded-xl p-4 h-[280px] flex items-center justify-center">

      {currentFrequency ? (

<img
  src={currentFrequency}
  alt="Respuesta en frecuencia"
  onClick={() => openImage(currentFrequency)}
  className="max-w-full max-h-full object-contain cursor-zoom-in transition duration-300 hover:scale-105"
/>

      ) : (

        <div className="h-full flex flex-col items-center justify-center text-center px-8">

          <div className="text-5xl mb-4">
            ℹ️
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            Gráfica no publicada
          </h3>

          <p className="text-sm text-gray-500 mt-3 leading-6 max-w-sm">
            El fabricante no incluye una representación gráfica oficial de la
            respuesta en frecuencia para este micrófono.
          </p>

        </div>

      )}

    </div>

  </section>

  {/* Patrón polar */}

  <section className="bg-[#2B2B2B] rounded-2xl p-6">

    <h2 className="text-xl font-semibold text-white mb-4">
      🎯 Patrón polar
    </h2>

    <div className="bg-white rounded-xl p-4 h-[280px] flex items-center justify-center">

      {currentPolar ? (
<img
  src={currentPolar}
  alt="Patrón polar"
  onClick={() => openImage(currentPolar)}
  className="max-w-full max-h-full object-contain cursor-zoom-in transition duration-300 hover:scale-105"
/>

      ) : (

        <div className="h-full flex flex-col items-center justify-center text-center px-8">

          <div className="text-5xl mb-4">
            ℹ️
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            Patrón polar no publicado
          </h3>

          <p className="text-sm text-gray-500 mt-3 leading-6 max-w-sm">
            El fabricante no proporciona una gráfica oficial del patrón polar
            en su documentación técnica.
          </p>

        </div>

      )}

    </div>

  </section>

</div>
{/* Información adicional */}

<section className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">

    <h3 className="text-xl font-semibold mb-4">
  🎯 Aplicaciones
</h3>

<div className="flex flex-wrap gap-2">
  {microphone.aplicaciones?.length ? (
    microphone.aplicaciones.map((item) => (
      <span
        key={item}
        className="px-3 py-2 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-sm"
      >
        {item}
      </span>
    ))
  ) : (
    <span className="text-gray-500">
      Sin información
    </span>
  )}
</div>

  </div>

  <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">

    <h3 className="text-xl font-semibold mb-4">
      ✅ Ventajas
    </h3>

<div className="flex flex-wrap gap-2">
  {microphone.ventajas?.length ? (
    microphone.ventajas.map((item) => (
      <span
        key={item}
        className="px-3 py-2 rounded-full bg-green-600/20 text-green-300 border border-green-500/30 text-sm"
      >
        {item}
      </span>
    ))
  ) : (
    <span className="text-gray-500">
      Sin información
    </span>
  )}
</div>

  </div>

  <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">

    <h3 className="text-xl font-semibold mb-4">
      ❌ Desventajas
    </h3>

   <div className="flex flex-wrap gap-2">
  {microphone.desventajas?.length ? (
    microphone.desventajas.map((item) => (
      <span
        key={item}
        className="px-3 py-2 rounded-full bg-red-600/20 text-red-300 border border-red-500/30 text-sm"
      >
        {item}
      </span>
    ))
  ) : (
    <span className="text-gray-500">
      Sin información
    </span>
  )}
</div>
  </div>

</section>
<CompareTable
  currentMic={microphone}
  compareMic={compareMic}
/>
<ImageModal
  isOpen={isModalOpen}
  image={modalImage}
  title={microphone.modelo}
  onClose={() => setIsModalOpen(false)}
/>
    </main>
  );
}

export default Details;
import { useState } from "react";
import CompareRow from "./CompareRow";
import ImageModal from "../common/ImageModal";
function CompareTable({ currentMic, compareMic }) {
    const [modalImage, setModalImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openImage = (image) => {
  if (!image) return;

  setModalImage(image);
  setIsModalOpen(true);
};
  if (!compareMic) return null;
const currentFrequency = currentMic.patronesPolares
  ? currentMic.patronesPolares[0].frecuencia
  : currentMic.graficaRespuesta;

const compareFrequency = compareMic.patronesPolares
  ? compareMic.patronesPolares[0].frecuencia
  : compareMic.graficaRespuesta;

const currentPolar = currentMic.patronesPolares
  ? currentMic.patronesPolares[0].polar
  : currentMic.patronPolar;

const comparePolar = compareMic.patronesPolares
  ? compareMic.patronesPolares[0].polar
  : compareMic.patronPolar;
  return (
<section className="mt-14">

      <h2 className="text-3xl font-bold mb-8">
        ⚖️ Comparación de micrófonos
      </h2>
<div className="grid md:grid-cols-2 gap-8 mb-10">

  <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-6 text-center">

    <img
      src={currentMic.imagen}
      alt={currentMic.modelo}
      className="h-56 object-contain mx-auto"
    />

    <h3 className="text-2xl font-bold mt-6">
      {currentMic.modelo}
    </h3>

    <p className="text-gray-400 mt-2">
      {currentMic.marca}
    </p>

    <span className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-600">
      {currentMic.tipo}
    </span>

  </div>

  <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-6 text-center">

    <img
      src={compareMic.imagen}
      alt={compareMic.modelo}
      className="h-56 object-contain mx-auto"
    />

    <h3 className="text-2xl font-bold mt-6">
      {compareMic.modelo}
    </h3>

    <p className="text-gray-400 mt-2">
      {compareMic.marca}
    </p>

    <span className="inline-block mt-4 px-4 py-2 rounded-full bg-green-600">
      {compareMic.tipo}
    </span>

  </div>

</div>
      <div className="overflow-x-auto rounded-2xl border border-[#3A3A3A]">

        <table className="w-full">

          <thead className="bg-[#2A2A2A]">

            <tr>

              <th className="p-5 text-left">
                Característica
              </th>

              <th className="p-5 text-center">
                {currentMic.modelo}
              </th>

              <th className="p-5 text-center">
                {compareMic.modelo}
              </th>

            </tr>

          </thead>

         <tbody>

  <CompareRow
    label="Marca"
    current={currentMic.marca}
    compare={compareMic.marca}
  />

  <CompareRow
    label="Modelo"
    current={currentMic.modelo}
    compare={compareMic.modelo}
  />

  <CompareRow
    label="Tipo"
    current={currentMic.tipo}
    compare={compareMic.tipo}
  />

  <CompareRow
    label="Patrón polar"
    current={currentMic.patron}
    compare={compareMic.patron}
  />

  <CompareRow
    label="Respuesta en frecuencia"
    current={currentMic.respuestaFrecuencia}
    compare={compareMic.respuestaFrecuencia}
  />

  <CompareRow
    label="Sensibilidad"
    current={currentMic.sensibilidad}
    compare={compareMic.sensibilidad}
  />

  <CompareRow
    label="SPL máximo"
    current={currentMic.splMaximo}
    compare={compareMic.splMaximo}
    currentBetter={
      Number(currentMic.splMaximo) >
      Number(compareMic.splMaximo)
    }
    compareBetter={
      Number(compareMic.splMaximo) >
      Number(currentMic.splMaximo)
    }
  />

  <CompareRow
    label="Phantom"
    current={currentMic.phantom}
    compare={compareMic.phantom}
  />

</tbody>

        </table>

      </div>
      {/* Comparación de gráficas */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

  {/* Respuesta en frecuencia */}

  <section className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">

    <h3 className="text-xl font-semibold mb-6">
      📈 Respuesta en frecuencia
    </h3>

    <div className="grid grid-cols-2 gap-6">

      <div className="bg-white rounded-xl p-4 flex items-center justify-center h-72">
       {currentFrequency ? (
  <img
src={currentFrequency}
  alt={currentMic.modelo}
onClick={() => openImage(currentFrequency)}
  className="max-w-full max-h-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
/>
        ) : (
          <span className="text-gray-500">
            Sin gráfica
          </span>
        )}
      </div>

      <div className="bg-white rounded-xl p-4 flex items-center justify-center h-72">
       {compareFrequency ? (
<img
src={compareFrequency}
  alt={compareMic.modelo}
onClick={() => openImage(compareFrequency)}
  className="max-w-full max-h-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
/>
        ) : (
          <span className="text-gray-500">
            Sin gráfica
          </span>
        )}
      </div>

    </div>

  </section>

  {/* Patrón polar */}

  <section className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">

    <h3 className="text-xl font-semibold mb-6">
      🎯 Patrón polar
    </h3>

  <div className="grid grid-cols-2 gap-6">

  <div className="bg-white rounded-xl p-4 flex items-center justify-center h-72">
    {currentPolar ? (
      <img
   src={currentPolar}
        alt={currentMic.modelo}
onClick={() => openImage(currentPolar)}
        className="max-w-full max-h-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
      />
    ) : (
      <span className="text-gray-500">
        Sin gráfica
      </span>
    )}
  </div>

  <div className="bg-white rounded-xl p-4 flex items-center justify-center h-72">
   {comparePolar ? (
      <img
   src={comparePolar}
        alt={compareMic.modelo}
   onClick={() => openImage(comparePolar)}
        className="max-w-full max-h-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
      />
    ) : (
      <span className="text-gray-500">
        Sin gráfica
      </span>
    )}
  </div>

</div>

</section>

</div>

<ImageModal
  isOpen={isModalOpen}
  image={modalImage}
  title="Comparación"
  onClose={() => setIsModalOpen(false)}
/>

</section>
  );
}

export default CompareTable;
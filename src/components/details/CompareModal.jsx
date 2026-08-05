import { useState } from "react";
import microphones from "../../data/microphones";

function CompareModal({
  microphone,
  isOpen,
  onClose,
  onCompare,
}) {
  const [selectedMic, setSelectedMic] = useState(null);

  if (!isOpen) return null;

  const availableMicrophones = microphones.filter(
    (mic) => mic.id !== microphone?.id
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-6">
          ⚖️ Comparar micrófonos
        </h2>

        <div className="space-y-3 max-h-80 overflow-y-auto">

          {availableMicrophones.map((mic) => (

            <div
              key={mic.id}
              onClick={() => setSelectedMic(mic)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition border ${
                selectedMic?.id === mic.id
                  ? "bg-blue-600/20 border-blue-500"
                  : "bg-[#353535] border-transparent hover:bg-[#404040]"
              }`}
            >
              <img
                src={mic.imagen}
                alt={mic.modelo}
                className="w-14 h-14 object-contain"
              />

              <div>
                <p className="font-semibold">
                  {mic.marca}
                </p>

                <p className="text-gray-400 text-sm">
                  {mic.modelo}
                </p>
              </div>

            </div>

          ))}

        </div>
{selectedMic && (
  <button
onClick={() => {
  onClose();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    onCompare(selectedMic);
  }, 150);
}}
    className="w-full mt-6 bg-green-600 hover:bg-green-700 transition rounded-xl py-3 font-semibold"
  >
    Comparar
  </button>
)}
        {selectedMic && (
  <div className="mt-6 rounded-xl bg-[#1F1F1F] p-4 border border-[#3A3A3A]">
    <p className="text-gray-400 text-sm">
      Micrófono seleccionado
    </p>

    <h3 className="text-xl font-semibold mt-2">
      {selectedMic.marca} {selectedMic.modelo}
    </h3>
  </div>
)}
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}

export default CompareModal;
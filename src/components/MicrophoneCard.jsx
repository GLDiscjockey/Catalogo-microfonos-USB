import { Link } from "react-router-dom";

function MicrophoneCard({ microphone }) {
  return (
    <Link
      to={`/microfono/${microphone.id}`}
      className="block group"
    >
      <article className="bg-[#2B2B2B] border border-[#3A3A3A] rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-2xl">

        {/* Imagen */}
        <div className="h-60 bg-[#1C1C1C] flex items-center justify-center overflow-hidden">

          {microphone.imagen ? (
            <img
              src={microphone.imagen}
              alt={microphone.modelo}
              className="h-48 object-contain transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-5xl">🎙️</div>
              <p className="mt-3 text-sm">
                No hay imagen
              </p>
            </div>
          )}

        </div>

        {/* Información */}
        <div className="p-5">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                {microphone.marca}
              </p>

              <h2 className="text-3xl font-bold mt-1">
                {microphone.modelo}
              </h2>

            </div>

            <span className="text-2xl text-gray-500 group-hover:text-blue-500 transition">
              →
            </span>

          </div>

          <div className="flex gap-2 mt-5 flex-wrap">

            <span className="px-3 py-1 rounded-full bg-blue-600 text-sm">
              {microphone.tipo}
            </span>

            <span className="px-3 py-1 rounded-full bg-[#404040] text-sm">
              {microphone.patron || "Sin definir"}
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}

export default MicrophoneCard;
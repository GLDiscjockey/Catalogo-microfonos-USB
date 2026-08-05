import { Search } from "lucide-react";

function ImageCard({ microphone, onImageClick }) {
  return (
    <div className="relative group bg-[#2A2A2A] h-[420px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center overflow-hidden">

      {microphone.imagen ? (
        <>
          <img
            src={microphone.imagen}
            alt={microphone.modelo}
            onClick={() => onImageClick(microphone.imagen)}
            className="max-h-[340px] max-w-[90%] object-contain cursor-zoom-in transition duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div
            onClick={() => onImageClick(microphone.imagen)}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center cursor-zoom-in"
          >
            <Search size={42} className="text-white mb-3" />

            <span className="text-white text-lg font-medium">
              Ampliar imagen
            </span>
          </div>
        </>
      ) : (
        <span className="text-gray-500">
          Sin imagen
        </span>
      )}

    </div>
  );
}

export default ImageCard;
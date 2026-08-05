import { useEffect } from "react";
import { X } from "lucide-react";

function ImageModal({ isOpen, image, title, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    >
   <div
  onClick={(e) => e.stopPropagation()}
className="relative max-w-6xl max-h-[90vh]"
>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
        >
          <X size={32} />
        </button>

  <img
  src={image}
  alt={title}
  className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-black/60"
/>
      </div>
    </div>
  );
}

export default ImageModal;
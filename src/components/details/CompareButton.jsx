import { useState } from "react";
import CompareModal from "./CompareModal";

function CompareButton({ microphone, onCompare }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
  onClick={() => {
  window.scrollTo(0, 0);
  setIsOpen(true);
}}
        className="mt-6 px-5 py-3 rounded-xl border border-[#3A3A3A] bg-[#2A2A2A] hover:bg-[#353535] transition font-medium"
      >
        ⚖️ Comparar con otro micrófono
      </button>

      {isOpen && (
 <CompareModal
  microphone={microphone}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCompare={onCompare}
/>
      )}
    </>
  );
}

export default CompareButton;
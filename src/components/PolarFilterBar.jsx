const patterns = [
  "Todos",
  "Cardioide",
  "Supercardioide",
  "Hipercardioide",
  "Omnidireccional",
  "Bidireccional",
];

function PolarFilterBar({ polarFilter, setPolarFilter }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {patterns.map((pattern) => (
        <button
          key={pattern}
          onClick={() => setPolarFilter(pattern)}
          className={`px-4 py-2 rounded-full transition ${
            polarFilter === pattern
              ? "bg-blue-600 text-white"
              : "bg-[#2A2A2A] hover:bg-[#353535]"
          }`}
        >
          {pattern}
        </button>
      ))}
    </div>
  );
}

export default PolarFilterBar;
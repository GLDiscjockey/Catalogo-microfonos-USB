function PatternSelector({
  patronesPolares,
  selectedPattern,
  setSelectedPattern,
}) {
  if (!patronesPolares) return null;

  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold mb-5">
        🎙️ Patrón polar
      </h2>

      <div className="flex flex-wrap gap-3">

        {patronesPolares.map((patron, index) => (
          <button
            key={patron.nombre}
            onClick={() => setSelectedPattern(index)}
            className={`px-4 py-2 rounded-full transition border ${
              selectedPattern === index
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-[#2A2A2A] border-[#3A3A3A] text-gray-300 hover:bg-[#383838]"
            }`}
          >
            {patron.nombre}
          </button>
        ))}

      </div>

    </section>
  );
}

export default PatternSelector;
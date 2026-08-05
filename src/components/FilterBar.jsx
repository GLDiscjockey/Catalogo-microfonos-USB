function FilterBar({ filter, setFilter }) {
  const filtros = [
    "Todos",
    "Dinámico",
    "Condensador",
    "Cinta",
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {filtros.map((filtro) => (
        <button
          key={filtro}
          onClick={() => setFilter(filtro)}
          className={`px-5 py-2 rounded-full transition ${
            filter === filtro
              ? "bg-blue-600"
              : "bg-[#2A2A2A] hover:bg-[#383838]"
          }`}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
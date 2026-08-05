import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import MicrophoneCard from "../components/MicrophoneCard";
import microphones from "../data/microphones/index";
import PolarFilterBar from "../components/PolarFilterBar";

function Home({
  search,
  setSearch,
  filter,
  setFilter,
  polarFilter,
  setPolarFilter,
}) {
const filteredMicrophones = microphones.filter((microphone) => {
  const text = `${microphone.marca} ${microphone.modelo}`.toLowerCase();

  const matchesSearch = text.includes(search.toLowerCase());

const matchesType =
  filter === "Todos" ||
  microphone.tipo === filter;

const matchesPolar =
  polarFilter === "Todos" ||
  (
    microphone.patronesPolares &&
    microphone.patronesPolares.some((patron) => {
      if (polarFilter === "Bidireccional") {
        return patron.nombre === "Figura de 8";
      }

      return patron.nombre === polarFilter;
    })
  ) ||
  microphone.patron === polarFilter;

return matchesSearch && matchesType && matchesPolar;
});
  return (
    
<main className="max-w-7xl mx-auto px-6 py-10 animate-fadeInUp">

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

<FilterBar
  filter={filter}
  setFilter={setFilter}

/><PolarFilterBar
  polarFilter={polarFilter}
  setPolarFilter={setPolarFilter}
/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

        {filteredMicrophones.map((microphone) => (
          <MicrophoneCard
            key={microphone.id}
            microphone={microphone}
          />
        ))}

      </section>

    </main>
  );
}

export default Home;
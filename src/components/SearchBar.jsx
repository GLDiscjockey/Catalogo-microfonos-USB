import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mt-2">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl py-4 pl-14 pr-5 text-white outline-none focus:border-blue-500 transition"
      />

    </div>
  );
}

export default SearchBar;
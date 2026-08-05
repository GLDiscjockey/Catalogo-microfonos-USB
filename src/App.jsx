import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Compare from "./pages/Compare";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [polarFilter, setPolarFilter] = useState("Todos");

  return (
    <div className="min-h-screen bg-[#212121] text-white">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
              polarFilter={polarFilter}
              setPolarFilter={setPolarFilter}
            />
          }
        />

        <Route
          path="/microfono/:id"
          element={<Details />}
        />
           <Route
  path="/compare"
  element={<Compare />}
/>
      </Routes>
   
    </div>
  );
}

export default App;
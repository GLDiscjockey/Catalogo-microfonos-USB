import { useState } from "react";
import microphones from "../data/microphones";

function Compare() {
  const [mic1, setMic1] = useState("");
  const [mic2, setMic2] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 text-white">

      <h1 className="text-4xl font-bold mb-2">
        Comparador de micrófonos
      </h1>

      <p className="text-gray-400 mb-10">
        Selecciona dos micrófonos para comparar sus especificaciones.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <select
          value={mic1}
          onChange={(e) => setMic1(e.target.value)}
          className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl px-4 py-3 text-white"
        >
          <option value="">Selecciona el primer micrófono</option>

          {microphones.map((mic) => (
            <option key={mic.id} value={mic.id}>
              {mic.marca} {mic.modelo}
            </option>
          ))}

        </select>

        <select
          value={mic2}
          onChange={(e) => setMic2(e.target.value)}
          className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl px-4 py-3 text-white"
        >
          <option value="">Selecciona el segundo micrófono</option>

          {microphones.map((mic) => (
            <option key={mic.id} value={mic.id}>
              {mic.marca} {mic.modelo}
            </option>
          ))}

        </select>

      </div>

    </main>
  );
}

export default Compare;
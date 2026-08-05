import SpecRow from "./SpecRow";

function TechnicalSpecs({ microphone }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <span>⚙</span>
        <span>Especificaciones técnicas</span>
      </h2>

      <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6">
        {[
          ["Marca", microphone.marca],
          ["Modelo", microphone.modelo],
          ["Tipo", microphone.tipo],
          ["Patrón polar", microphone.patron],
          ["Tamaño del diafragma", microphone.diafragma],
          ["Rango de frecuencia", microphone.rangoFrecuencia],
          ["Sensibilidad", microphone.sensibilidad],
          ["Impedancia de salida", microphone.impedanciaSalida],
          ["SPL máximo", microphone.splMaximo],
          ["Phantom Power", microphone.phantom],
        ].map(([label, value]) => (
          <SpecRow
            key={label}
            label={label}
            value={value}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnicalSpecs;
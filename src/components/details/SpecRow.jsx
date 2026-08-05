function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between items-start py-4 border-b border-[#3A3A3A] last:border-b-0">

      <span className="text-gray-400 font-medium w-1/2">
        {label}
      </span>

      <span className="text-white font-semibold text-right w-1/2">
        {value || "-"}
      </span>

    </div>
  );
}

export default SpecRow;
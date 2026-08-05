function CompareRow({
  label,
  current,
  compare,
  currentBetter = false,
  compareBetter = false,
}) {
  return (
    <tr className="border-t border-[#3A3A3A]">

      <td className="p-4 font-semibold bg-[#262626]">
        {label}
      </td>

      <td
        className={`p-4 text-center ${
          currentBetter
            ? "text-green-400 font-bold"
            : ""
        }`}
      >
        {current || "-"}
      </td>

      <td
        className={`p-4 text-center ${
          compareBetter
            ? "text-green-400 font-bold"
            : ""
        }`}
      >
        {compare || "-"}
      </td>

    </tr>
  );
}

export default CompareRow;
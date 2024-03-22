export const Select = ({ unitOptions, onSelect }) => (
  <select
    onChange={onSelect}
    className="block w-full p-2 border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer"
  >
    {unitOptions.map((option, index) => (
      <option key={index} value={option.id}>
        {option.label} {option.discount} OFF - {option.price}
      </option>
    ))}
  </select>
);

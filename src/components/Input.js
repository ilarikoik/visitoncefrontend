export default function Input({ label, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-white font-bold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
}

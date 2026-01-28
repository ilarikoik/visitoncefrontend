import { useState, useEffect } from "react";

export default function Button({ label, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded`}
    >
      {label}
    </button>
  );
}

import { useState } from "react";

export default function TriviaCard({
  question,
  correctAnswer,
  userAnswer,
  onChange,
}) {
  //   const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
  const isCorrect =
    (userAnswer || "").toLowerCase() === (correctAnswer || "").toLowerCase();

  return (
    <div
      className={`${isCorrect ? "bg-green-500" : "bg-neutral-100"} rounded-2xl shadow-lg mb-4 p-4 transition-transform transform hover:scale-[1.03]`}
    >
      <div
      // className={`p-4 rounded-lg ${isCorrect ? "bg-green-500" : "bg-neutral-100"}`}
      >
        <h3 className="text-lg font-semibold text-black mb-3">{question}</h3>
        <input
          type="text"
          placeholder="Type your answer..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-gray-900 transition"
          value={userAnswer}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";

const questions = [
  {
    question: "Who is the leader of BTS?",
    options: ["RM", "Jin", "Jungkook"],
    answer: "RM",
  },
  {
    question: "Which member’s nickname is 'Worldwide Handsome'?",
    options: ["Jin", "Suga", "V"],
    answer: "Jin",
  },
  // …add more questions
];

export default function Trivia() {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);

  const q = questions[qIdx];
  const handle = (opt) => {
    if (opt === q.answer) setScore((s) => s + 1);
    setQIdx((i) => Math.min(questions.length - 1, i + 1));
  };

  return (
    <div className="trivia">
      <h2>{q.question}</h2>
      <div className="options">
        {q.options.map((o, i) => (
          <button key={i} onClick={() => handle(o)}>
            {o}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

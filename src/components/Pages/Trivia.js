import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { triviaQuestions } from "../../data/triviaData";

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [savedScore, setSavedScore] = useState(null);

  // Load previous score from localStorage
  useEffect(() => {
    const storedScore = localStorage.getItem("btsTriviaScore");
    if (storedScore) {
      setSavedScore(storedScore);
    }
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === triviaQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < triviaQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePlayAgain = () => {
    setSavedScore(score);
    localStorage.setItem("btsTriviaScore", score);
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <motion.div
      className="trivia"
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 5 }}
      transition={{ duration: 0.5 }}
    >
      <h2>BTS Trivia</h2>

      {savedScore !== null && (
        <div className="previous-score">
          <p>
            Your previous saved score: {savedScore} / {triviaQuestions.length}
          </p>
        </div>
      )}

      {showScore ? (
        <div className="score-section">
          <h3>
            You scored {score} out of {triviaQuestions.length}!
          </h3>
          <button onClick={handlePlayAgain}>Save Score & Play Again</button>
        </div>
      ) : (
        <div className="question-section">
          <h3>{triviaQuestions[currentQuestion].question}</h3>
          <div className="options">
            {triviaQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

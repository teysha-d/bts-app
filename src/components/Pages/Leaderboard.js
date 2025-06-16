import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const savedScores =
      JSON.parse(localStorage.getItem("btsTriviaLeaderboard")) || [];
    setLeaderboard(savedScores);
  }, []);

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>🎮 BTS Trivia Leaderboard 🎮</h2>

      {leaderboard.length === 0 ? (
        <p>No scores saved yet. Play the trivia to submit your score!</p>
      ) : (
        <div className="leaderboard-table">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.score}</td>
                  <td>{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}

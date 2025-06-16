import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Home() {
  return (
    <motion.div
      className="home"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>💜 Welcome to the BTS Fan Club 💜</h2>
      <p>
        Join us as we celebrate BTS with profiles, trivia, galleries, and more!
      </p>
      <div className="home-card">
        <h3>🎤 Explore, Learn & Connect 🎤</h3>
        <p>
          Start with the navigation above to explore each section dedicated to
          BTS.
        </p>
        <p>New features are always being added — so stay tuned!</p>
      </div>
    </motion.div>
  );
}

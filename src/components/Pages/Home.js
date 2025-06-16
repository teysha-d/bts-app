import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Home() {
  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>Welcome to the BTS Fan Club</h2>
      <p>
        🎤 Explore member profiles, trivia games, photo galleries, and more!
      </p>
      <div className="home-card">
        <h3>🎧 Stay tuned for more fan content, updates & fun!</h3>
      </div>
    </motion.div>
  );
}

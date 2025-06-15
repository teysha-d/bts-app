import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome to the BTS Fan Club!</h2>
      <p>Use the nav above to explore profiles, gallery, trivia, and more.</p>
    </motion.div>
  );
}

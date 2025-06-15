import React from "react";
import { motion } from "framer-motion";

export default function Trivia() {
  return (
    <motion.div
      className="trivia"
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 5 }}
      transition={{ duration: 0.5 }}
    >
      <h2>BTS Trivia</h2>
      <p>Test your knowledge of BTS fun facts!</p>
    </motion.div>
  );
}

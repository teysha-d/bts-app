import React from "react";
import { motion } from "framer-motion";

export default function MessageBoard() {
  return (
    <motion.div
      className="message-board"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Message Board</h2>
      <p>Leave messages and connect with other fans!</p>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function MessageBoard() {
  return (
    <motion.div
      className="message-board"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>💬 Message Board 💬</h2>
      <p>Leave messages and connect with other BTS fans! 🎶</p>
      <div className="message-card">
        <p>
          <em>Coming soon: live fan messages, comments, and shoutouts!</em>
        </p>
      </div>
    </motion.div>
  );
}

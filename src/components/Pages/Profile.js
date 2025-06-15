import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Member Profiles</h2>
      <p>Here you can explore BTS member profiles.</p>
    </motion.div>
  );
}

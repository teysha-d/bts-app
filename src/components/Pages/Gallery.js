import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <motion.div
      className="gallery"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <h2>BTS Gallery</h2>
      <p>View photos, videos, and fan art!</p>
    </motion.div>
  );
}

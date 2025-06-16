import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const quotes = [
  "Don't be trapped in someone else's dream. — V",
  "Effort makes you. You will regret someday if you don’t do your best now. Don’t think it’s too late but keep working on it. — Jungkook",
  "Love myself, love yourself, peace. — J-Hope",
  "Go on your path, even if you live for a day. — Jimin",
  "Teamwork makes the dream work. — RM",
  "Don't be afraid, don’t worry yourself. The end and the beginning, beginning and the end are connected. — Suga",
  "Live your life. It’s yours anyway. Don’t try too hard. It’s okay to lose. — Jin",
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="quote-carousel">
      <button onClick={handlePrev}>
        <FaChevronLeft />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="quote-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p>"{quotes[index]}"</p>
        </motion.div>
      </AnimatePresence>

      <button onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}

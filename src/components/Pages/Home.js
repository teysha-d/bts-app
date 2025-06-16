// src/components/Pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";
import groupPhoto from "../../images/bts16.jpeg"; // adjust filename/path as needed

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
      <h2>💜 Welcome to the BTS Fan App 💜</h2>
      <p>
        🎤 Explore member profiles, trivia games, photo galleries, and more!
      </p>

      {/* New group photo card */}
      <div className="home-card">
        <img
          src={groupPhoto}
          alt="BTS Group"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "15px",
            display: "block",
          }}
        />
      </div>

      {/* Quote carousel (arrows made perfectly round in CSS) */}
      <div className="quote-carousel">
        <button onClick={() => /* prev logic */ null}>&lt;</button>
        <div className="quote-card">
          “Go on your path, even if you live for a day.” — Jimin
        </div>
        <button onClick={() => /* next logic */ null}>&gt;</button>
      </div>
    </motion.div>
  );
}

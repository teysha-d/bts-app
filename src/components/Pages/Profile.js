// src/components/Pages/Profile.js
import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";
import { btsMembers } from "../../data/btsData";

export default function Profile() {
  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Center this heading */}
      <h2 className="page-title">Member Profiles</h2>

      <div className="member-list">
        {btsMembers.map((member) => (
          <div key={member.name} className="member-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.displayName}</h3>
            <p>Position: {member.position}</p>
            <p>Birthday: {member.birthday}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

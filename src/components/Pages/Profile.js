// src/components/Pages/Profile.js
import React from "react";
import { motion } from "framer-motion";
import { btsMembers } from "../../data/btsData";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Profile() {
  return (
    <motion.div
      className="page-container" // use the shared page-container
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2 className="page-title">Member Profiles</h2> {/* centered title */}
      <div className="member-list">
        {btsMembers.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.photo} alt={member.name} />
            <h3>
              {member.name} ({member.realName})
            </h3>
            <p>Position: {member.position}</p>
            <p>Birthday: {member.birthday}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

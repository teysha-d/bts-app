import React from "react";
import { motion } from "framer-motion";
import { btsMembers } from "../../data/btsData";

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

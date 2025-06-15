import React from "react";

const members = [
  { name: "RM", image: "/images/rm.jpg", funFact: "RM loves reading books!" },
  {
    name: "Jin",
    image: "/images/jin.jpg",
    funFact: "Jin is known as 'Worldwide Handsome'!",
  },
  {
    name: "Suga",
    image: "/images/suga.jpg",
    funFact: "Suga plays basketball in his downtime.",
  },
  {
    name: "J-Hope",
    image: "/images/jhope.jpg",
    funFact: "J-Hope’s dance moves are legendary.",
  },
  {
    name: "Jimin",
    image: "/images/jimin.jpg",
    funFact: "Jimin trained in modern dance.",
  },
  {
    name: "V",
    image: "/images/v.jpg",
    funFact: "V originally studied acting.",
  },
  {
    name: "Jungkook",
    image: "/images/jk.jpg",
    funFact: "Jungkook is BTS’s golden maknae.",
  },
];

export default function Profile() {
  return (
    <div className="profile">
      {members.map((m, i) => (
        <div key={i} className="profile-card">
          <img src={m.image} alt={m.name} />
          <h3>{m.name}</h3>
          <p>{m.funFact}</p>
        </div>
      ))}
    </div>
  );
}

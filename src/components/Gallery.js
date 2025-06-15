import React, { useState } from "react";

const galleryItems = [
  { type: "image", src: "/media/bts1.jpg", alt: "BTS on stage" },
  { type: "video", src: "/media/bts2.mp4", alt: "BTS music video" },
  // …add more here
];

export default function Gallery() {
  const [idx, setIdx] = useState(0);
  const item = galleryItems[idx];

  return (
    <div className="gallery">
      {item.type === "image" ? (
        <img src={item.src} alt={item.alt} />
      ) : (
        <video controls>
          <source src={item.src} type="video/mp4" />
        </video>
      )}
      <div className="controls">
        <button onClick={() => setIdx((i) => Math.max(0, i - 1))}>
          Previous
        </button>
        <button
          onClick={() =>
            setIdx((i) => Math.min(galleryItems.length - 1, i + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

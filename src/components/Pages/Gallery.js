import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../../data/galleryData";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Gallery() {
  const groupPhoto = galleryImages.find(
    (img) => img.title === "BTS Group Photo"
  );
  const memberPhotos = galleryImages.filter(
    (img) => img.title !== "BTS Group Photo"
  );

  return (
    <motion.div
      className="gallery"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>BTS Photo Gallery</h2>

      <div className="banner-photo">
        <img src={groupPhoto.image} alt={groupPhoto.title} />
      </div>

      <div className="gallery-grid">
        {memberPhotos.map((img) => (
          <motion.div
            key={img.id}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img.image} alt={img.title} />
            <h3>{img.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

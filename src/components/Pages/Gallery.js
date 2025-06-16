import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../../data/galleryData";

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
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

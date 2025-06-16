import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import rm from "../../images/bts2.jpg";
import jin from "../../images/bts3.jpg";
import suga from "../../images/bts4.jpg";
import jhope from "../../images/bts5.jpg";
import jimin from "../../images/bts6.jpg";
import v from "../../images/bts7.jpg";
import jungkook from "../../images/bts8.jpg";
import groupPhoto from "../../images/bts1.jpg";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: groupPhoto, title: "BTS Group" },
    { src: rm, title: "RM" },
    { src: jin, title: "Jin" },
    { src: suga, title: "Suga" },
    { src: jhope, title: "J-Hope" },
    { src: jimin, title: "Jimin" },
    { src: v, title: "V" },
    { src: jungkook, title: "Jungkook" },
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>BTS Photo Gallery 📸</h2>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => openLightbox(index)}
          >
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.title }))}
        />
      )}
    </motion.div>
  );
}

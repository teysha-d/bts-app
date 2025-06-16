// src/components/Pages/Gallery.js
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ⬇️ Manually import each image
import groupPhoto from "../../images/bts1.jpg";
import rm from "../../images/bts2.jpg";
import jin from "../../images/bts3.jpg";
import suga from "../../images/bts4.jpg";
import jhope from "../../images/bts5.jpg";
import jimin from "../../images/bts6.jpg";
import v from "../../images/bts7.jpg";
import jungkook from "../../images/bts8.jpg";

import photo9 from "../../images/bts9.jpg";
import photo10 from "../../images/bts10.jpg";
import photo11 from "../../images/bts11.jpg";
import photo12 from "../../images/bts12.jpg";
import photo13 from "../../images/bts13.jpg";
import photo14 from "../../images/bts14.jpg";
import photo15 from "../../images/bts15.jpg";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function Gallery() {
  const images = [
    { src: groupPhoto, title: "BTS" },
    { src: rm, title: "RM" },
    { src: jin, title: "Jin" },
    { src: suga, title: "Suga" },
    { src: jhope, title: "J-Hope" },
    { src: jimin, title: "Jimin" },
    { src: v, title: "V" },
    { src: jungkook, title: "Jungkook" },

    // And now your new photos:
    { src: photo9, title: "Extra 1" },
    { src: photo10, title: "Extra 2" },
    { src: photo11, title: "Extra 3" },
    { src: photo12, title: "Extra 4" },
    { src: photo13, title: "Extra 5" },
    { src: photo14, title: "Extra 6" },
    { src: photo15, title: "Extra 7" },
  ];

  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  const openLightbox = () => setOpen(true);

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

      {/* Group Photo */}
      <div className="gallery-group">
        <img
          src={groupPhoto}
          alt="BTS Group"
          className="gallery-group-photo"
          onClick={openLightbox}
          role="button"
        />
        <p className="gallery-group-title">BTS Group</p>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <button className="carousel-nav prev" onClick={prev}>
          ‹
        </button>
        <div className="carousel-slide" onClick={openLightbox}>
          <img src={images[current].src} alt={images[current].title} />
          <p className="slide-title">{images[current].title}</p>
        </div>
        <button className="carousel-nav next" onClick={next}>
          ›
        </button>
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={current}
          slides={images.map((img) => ({ src: img.src, alt: img.title }))}
        />
      )}
    </motion.div>
  );
}

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function SpotifyBTS() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchBTSAlbums();
  }, []);

  const fetchBTSAlbums = async () => {
    const response = await fetch(
      "https://spotify23.p.rapidapi.com/artist_albums/?id=3Nrfpe0tUJi4K4DXYWgMUX&offset=0&limit=10",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0d2f0eb3c3msh09bd1c93a9fa561p15f438jsn80063c710a33",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();
    setAlbums(data.data.artist.discography.albums.items);
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
      <h2>🎧 BTS Albums (Live from Spotify)</h2>
      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <img
              src={album.releases.items[0].coverArt.sources[0].url}
              alt={album.releases.items[0].name}
            />
            <h3>{album.releases.items[0].name}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../components/Pages/Home";
import Profile from "../components/Pages/Profile";
import Gallery from "../components/Pages/Gallery";
import Trivia from "../components/Pages/Trivia";
import MessageBoard from "../components/Pages/MessageBoard";
import SpotifyBTS from "../components/Pages/SpotifyBTS";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/message-board" element={<MessageBoard />} />
        <Route path="/spotify" element={<SpotifyBTS />} />
      </Routes>
    </AnimatePresence>
  );
}

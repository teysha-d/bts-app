import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Profile from "../components/Pages/Profile";
import Gallery from "../components/Pages/Gallery";
import Trivia from "../components/Pages/Trivia";
import MessageBoard from "../components/Pages/MessageBoard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/message-board" element={<MessageBoard />} />
    </Routes>
  );
}

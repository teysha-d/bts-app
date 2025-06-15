import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profiles</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/trivia">Trivia</Link>
      <Link to="/message-board">Messages</Link>
    </nav>
  );
}

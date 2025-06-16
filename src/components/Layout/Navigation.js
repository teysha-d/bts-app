import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Navigation() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profiles</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/trivia">Trivia</Link>
      <Link to="/message-board">Messages</Link>
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

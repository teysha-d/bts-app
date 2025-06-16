import React from "react";
import { Link } from "react-router-dom";
import btsLogo from "../../assets/bts-logo.svg";

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <img src={btsLogo} alt="BTS Logo" className="bts-logo" />
          <h1>BTS Fan Club</h1>
        </div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/profile">Profiles</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/trivia">Trivia</Link>
          <Link to="/message-board">Messages</Link>
          <Link to="/spotify">Spotify</Link>
        </nav>
      </div>
    </header>
  );
}

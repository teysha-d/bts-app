import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Trivia from "./components/Trivia";
import MessageBoard from "./components/MessageBoard";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the BTS Fan Club!</h2>
      <p>Use the nav above to explore profiles, gallery, trivia, and more.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <h1>BTS Fan Club</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profiles</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/trivia">Trivia</Link>
          <Link to="/message-board">Messages</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/message-board" element={<MessageBoard />} />
        </Routes>
      </main>
    </Router>
  );
}

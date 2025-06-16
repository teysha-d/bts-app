import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Splash from "./components/Splash";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import "./styles/style.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Header />
          <AppRoutes />
        </>
      )}
    </Router>
  );
}

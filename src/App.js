import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Layout/Header";
import Navigation from "./components/Layout/Navigation";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/style.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Navigation />
        <main>
          <AppRoutes />
        </main>
      </Router>
    </ThemeProvider>
  );
}

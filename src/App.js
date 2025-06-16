import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Splash from "./components/Splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Header />
          <AppRoutes />
        </>
      )}
    </>
  );
}

export default App;

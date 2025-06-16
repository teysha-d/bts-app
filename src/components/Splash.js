import React from "react";
import btsLogo from "../assets/bts-logo.svg";

export default function Splash() {
  return (
    <div className="splash-screen">
      <img src={btsLogo} alt="BTS Logo" className="bts-logo" />
      <h1>Loading BTS Vibe...</h1>
    </div>
  );
}

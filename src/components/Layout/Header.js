import React from "react";
import btsLogo from "../../assets/bts-logo.svg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={btsLogo} alt="BTS Logo" className="bts-logo" />
      <h1>BTS Fan Club</h1>
    </header>
  );
}

import React from "react";
import logo from "./images/logo.png";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="AirBnb logo" className="nav--logo" />
    </nav>
  );
}

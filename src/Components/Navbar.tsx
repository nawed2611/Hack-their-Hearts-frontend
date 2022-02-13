import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar-style.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">Hack their Hearts</h1>
      </Link>

      <ul className="navlinks">
        <li>GitHub Repo</li>
      </ul>
    </div>
  );
}

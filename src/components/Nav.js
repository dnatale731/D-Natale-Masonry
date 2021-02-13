import React from "react";
import "../App.scss";
import logo from './images/logo_transparent.png'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
        </ul>
        <img src={logo} className="logo" />
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

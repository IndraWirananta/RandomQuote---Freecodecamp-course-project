import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#calculator" id="logo">
          <big>
            <bold id="title">Random Quote Generator</bold>
            <small>by indra</small>
          </big>
        </a>

        <div id="divider"></div>
        <ul className="nav_links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
        <button id="hamburger">
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </button>
      </nav>
    );
  }
}
export default Navbar;

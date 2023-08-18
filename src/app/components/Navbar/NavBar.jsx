import React from "react";

import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-element">
          <a href="#timer">Timer</a>
        </li>
        <li className="nav-element">
          <a href="#todo">To Do</a>
        </li>
        <li className="nav-element">
          <a href="#notes">Notes</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

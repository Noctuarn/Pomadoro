import React from "react";
import { Link } from "react-scroll";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-element">
          <Link to="timer" smooth = {true}>Timer</Link>
        </li>
        <li className="nav-element">
          <Link to="todo" smooth = {true}>To Do</Link>
        </li>
        <li className="nav-element">
          <Link to="notes" smooth = {true}>Notes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

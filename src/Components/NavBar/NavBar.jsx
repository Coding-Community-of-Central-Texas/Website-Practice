import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-links" id="navLinks">
        <ul>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="members">Members</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

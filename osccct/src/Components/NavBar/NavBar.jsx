import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-links" id="navLinks">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Members">Members</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

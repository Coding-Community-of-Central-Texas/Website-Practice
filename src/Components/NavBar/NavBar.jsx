import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import instagramLogo from "../../images/instagram-logo.png";
import discordLogo from "../../images/discord-logo.png";
import presenceLogo from "../../images/presence-logo.png";
import notionLogo from "../../images/Notion-logo.png";

export default function NavBar() {
  return (
    <nav className="nav-links">
      <div className="nav-links-container">
        <ul>
          <li className="page-link">
            <NavLink to="home">Home</NavLink>
          </li>
          <li className="page-link">
            <NavLink to="members">Members</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.instagram.com/oscc_ct/"><img src={instagramLogo} alt= "@oscc_ct"/></a>
          </li>
          <li>
            <a href="https://discord.gg/NJ4U5jrBbX"><img src={discordLogo} alt="Coding Club"/></a>
          </li>
          <li>
            <a href="https://tamuct.presence.io/organization/open-source-coding-community-of-central-texas"><img src={presenceLogo} alt="Presence"/></a>
          </li>
          <li>
            <a href="https://www.notion.so/osccct/Open-Source-Coding-Community-of-Central-Texas-OSCCCT"><img src={notionLogo} alt="Notion"/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

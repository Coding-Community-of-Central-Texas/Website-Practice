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
      <div id="navLinks">
        <ul>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="members">Members</NavLink>
          </li>
        </ul>
        <ul id="socials">
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
            <a href="https://www.notion.so/team/10348fd2-16d9-8162-a0ce-0042ec787a9d/join"><img src={notionLogo} alt="Notion"/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

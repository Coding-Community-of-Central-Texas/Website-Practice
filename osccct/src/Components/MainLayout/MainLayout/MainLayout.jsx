import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>© 2025 Open Source Coding Club of Central Texas</footer>
    </div>
  );
}

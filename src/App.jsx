import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Members from "./Pages/Members/Members";
import MemberProfile from "./Pages/Members/Profile"; // <-- new profile page
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="members" element={<Members />} />
        {/* Dynamic route for About Me pages */}
        <Route path="members/:slug" element={<MemberProfile />} />
      </Route>
    </Routes>
  );
}

export default App;

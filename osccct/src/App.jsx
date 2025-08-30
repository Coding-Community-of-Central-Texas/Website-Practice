import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Members from "./Pages/Members/Members";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="member" element={<Members />} />
      </Route>
    </Routes>
  );
}

export default App;

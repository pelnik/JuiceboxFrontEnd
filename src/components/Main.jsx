import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from ".";
import Login from "./Login";

function Main() {
  return (
    <div className="mainContainer" id="mainContainer">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div className="mainContent">Test</div>} />
      </Routes>
    </div>
  );
}

export default Main;

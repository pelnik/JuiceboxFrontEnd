import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Register } from ".";
import Login from "./Login";
import { getToken } from "../utils/localStorage.js";
import Posts from "./Posts";

function Main() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = getToken();
    setToken(localToken);
  }, []);

  return (
    <div className="mainContainer" id="mainContainer">
      <Navbar  setToken={setToken} token={token} />
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route path="*" element={<Posts token={token} />} />
      </Routes>
    </div>
  );
}

export default Main;

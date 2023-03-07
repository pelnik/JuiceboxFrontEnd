import React from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/localStorage";

function Navbar(props) {
  const setToken = props.setToken;
  const navigate = useNavigate();

  function onClickLogOut() {
    saveToLocalStorage('');
    setToken('');
  }

  function onClickLogIn() {
    navigate('/login');
  }

  function onClickHome() {
    navigate('/');
  }

  return (
    <div className="navbar" id="navbar">
      <div className="subheader" id="leftHeader">
        <ul className="navBarLinks">
          <li onClick={onClickHome}>Home</li>
        </ul>
      </div>
      <div className="subheader" id="rightHeader">
        <ul className="navBarLinks">
          <li onClick={onClickLogIn}>Login</li>
          <li>Register</li>
          <li onClick={onClickLogOut}>Log Out</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

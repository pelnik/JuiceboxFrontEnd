import React from "react";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="subheader" id="leftHeader">
        Left header
      </div>
      <div className="subheader" id="rightHeader">
        <ul className="navBarLinks">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

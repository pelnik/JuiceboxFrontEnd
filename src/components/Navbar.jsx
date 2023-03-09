import React from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../utils/localStorage';

import HomeIcon from '@mui/icons-material/Home';

function Navbar(props) {
  const setToken = props.setToken;
  const token = props.token;

  const navigate = useNavigate();

  function onClickLogOut() {
    saveToLocalStorage('');
    setToken('');
  }

  function onClickLogIn() {
    navigate('/login');
  }

  function onClickRegister() {
    navigate('/register');
  }

  function onClickHome() {
    navigate('/');
  }

  return (
    <div className="navbar" id="navbar">
      <div className="subheader" id="leftHeader">
        <ul className="navBarLinks">
          <li onClick={onClickHome}>
            <HomeIcon />
          </li>
        </ul>
      </div>
      <div className="subheader" id="rightHeader">
        <ul className="navBarLinks">
          {!token ? <li onClick={onClickLogIn}>Login</li> : null}
          {!token ? <li onClick={onClickRegister}>Register</li> : null}
          {token ? <li onClick={onClickLogOut}>Log Out</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

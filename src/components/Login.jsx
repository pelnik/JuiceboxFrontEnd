import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api-adapter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login(props) {
  const setToken = props.setToken;
  const token = props.token;
  const setLoginUsername = props.setLoginUsername;

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameOnChange = (evt) => {
    setUsername(evt.target.value);
  };

  const passwordOnChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newToken = await login(username, password, setLoginUsername);

    if (newToken !== null) {
      setToken(newToken);

      setUsername('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (token !== '') {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="formContainer" id="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          <TextField
            type="text"
            value={username}
            name="username"
            onChange={usernameOnChange}
            variant="outlined"
            label="Username"
            style={{ color: '#9BC2BF', borderColor: '#9BC2BF' }}
          />
        </label>
        <label>
          <TextField
            type="text"
            value={password}
            name="password"
            variant="outlined"
            label="Password"
            onChange={passwordOnChange}
          />
        </label>
        <Button
          variant="outlined"
          className="LoginButton"
          type="submit"
          sx={{ color: '#9BC2BF', borderColor: '#9BC2BF' }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;

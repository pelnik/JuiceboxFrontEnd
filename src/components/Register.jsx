import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api-adapter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Register(props) {
  const setToken = props.setToken;
  const token = props.token;
  const navigate = useNavigate();

  const defaultUser = {
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
  };

  const [user, setUser] = useState(defaultUser);

  function onChange(evt, key) {
    const userCopy = {
      ...user,
      [key]: evt.target.value,
    };

    setUser(userCopy);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newToken = await register(user);

    setUser(defaultUser);

    if (newToken !== null) {
      setToken(newToken);
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
        <label>
          <TextField
            type="text"
            value={user.username}
            name="username"
            onChange={(evt) => {
              onChange(evt, 'username');
            }}
            variant="outlined"
            label="Username"
          />
        </label>
        <label>
          <TextField
            type="text"
            value={user.password}
            name="password"
            variant="outlined"
            label="Password"
            onChange={(evt) => {
              onChange(evt, 'password');
            }}
          />
        </label>
        <label>
          <TextField
            type="text"
            value={user.confirmPassword}
            name="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            onChange={(evt) => {
              onChange(evt, 'confirmPassword');
            }}
          />
        </label>
        <label>
          <TextField
            type="text"
            value={user.name}
            name="name"
            variant="outlined"
            label="Name"
            onChange={(evt) => {
              onChange(evt, 'name');
            }}
          />
        </label>
        <label>
          <TextField
            type="text"
            value={user.location}
            name="location"
            variant="outlined"
            label="Location"
            onChange={(evt) => {
              onChange(evt, 'location');
            }}
          />
        </label>
        {user.password === user.confirmPassword &&
        user.password !== '' &&
        user.username !== '' &&
        user.name !== '' &&
        user.location !== '' ? (
          <Button
            variant="outlined"
            className="register-button"
            type="submit"
            sx={{ color: '#9BC2BF', borderColor: '#9BC2BF' }}
          >
            Register
          </Button>
        ) : null}
      </form>
    </div>
  );
}

export default Register;

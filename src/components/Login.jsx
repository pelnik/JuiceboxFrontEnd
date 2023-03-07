import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../api-adapter';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login(props) {
  const setToken = props.setToken;
  const token = props.token;
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameOnChange = (evt) => {
    setUsername(evt.target.value);
  }

  const passwordOnChange = (evt) => {
    setPassword(evt.target.value);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newToken = await login(username, password);
    console.log('login submit token', newToken);

    setUsername('');
    setPassword('');
    
    if (newToken !== undefined) {
      setToken(token);
    }
  }

  useEffect(() => {
    if (token !== '') {
      navigate('/');
    };
  }, []);

  return (
    <div className="formContainer" id="login">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            value={username}
            name="username"
            onChange={usernameOnChange}
            variant="outlined"
            label="Username"
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
        <Button variant="outlined" className="LoginButton" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;

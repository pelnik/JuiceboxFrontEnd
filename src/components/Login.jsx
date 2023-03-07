import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../api-adapter';

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

  if (token !== '') {
    navigate('/posts');
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await login(username, password);
    console.log('login submit token', token);

    if (token !== undefined) {
      setToken(token);
    }
    setUsername('');
    setPassword('');

    navigate('/posts');
  }

  return (
    <div className="formContainer" id="login">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          username:
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            onChange={usernameOnChange}
          />
        </label>
        <label>
          password:
          <input
            type="text"
            placeholder="password"
            value={password}
            name="password"
            onChange={passwordOnChange}
          />
        </label>
        <button className="LoginBut" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

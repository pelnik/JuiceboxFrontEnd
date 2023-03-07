import React from "react";

function Login() {
  return (
    <div className="formContainer" id="login">
      <form className="form">
        <label>
          username:
          <input
            type="text"
            placeholder="username"
            // value={username}
            name="username"
          />
        </label>
        <label>
          password:
          <input
            type="text"
            placeholder="password"
            // value={username}
            name="password"
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

import React, { useRef } from "react";
import "./login.css";
export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Green.io</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Green.io.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

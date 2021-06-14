import axios from "axios";
import React, { useContext, useRef } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async e => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              type="password"
              className="loginInput"
              minLength="6"
            />
            <input
              type="password"
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">Login into account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

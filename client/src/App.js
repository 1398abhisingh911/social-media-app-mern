import React, { useContext } from "react";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import { Redirect } from "react-router";
import Profile from "../src/pages/profile/Profile";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

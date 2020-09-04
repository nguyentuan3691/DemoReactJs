import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import Home from "../pages/Home";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login">
            <AuthPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default RouterURL;

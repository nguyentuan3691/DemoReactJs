import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import Home from "../pages/Home";
import MemberList from "../pages/MemberList";

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
          {/* <Route path="/member-list">
            <MemberList />
          </Route> */}
        </Switch>
      </div>
    );
  }
}

export default RouterURL;

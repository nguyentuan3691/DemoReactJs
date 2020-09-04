import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import Registration from "./components/pages/AuthPage/Registration";
import ForgotPassword from "./components/pages/AuthPage/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" render={() => <Home />} />
        <Route path="/login" component={AuthPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </div>
  );
}

export default App;
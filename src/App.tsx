import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/AuthPage/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" render={() => <Home />} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

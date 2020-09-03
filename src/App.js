import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Redirect from="/" to="/sign-in" />
        <Route path="/sign-in" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

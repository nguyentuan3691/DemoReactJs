import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
<<<<<<< HEAD
import Login from './pages/Login'
=======
import Sidenav from './components/pages/Sidenav';
import Footer from './components/pages/Footer';

>>>>>>> 799f97ea373c9d3a27b11121d61d5906d0a3d949

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
      <Switch>
        <Redirect from="/" to="/sign-in" />
        <Route path="/sign-in" component={Login} />
      </Switch>
=======
      <Sidenav />
      <Footer />

>>>>>>> 799f97ea373c9d3a27b11121d61d5906d0a3d949
    </div>
  );
}

export default App;

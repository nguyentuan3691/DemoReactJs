import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './pages/Login'
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/login">
                        <Login />
                        
         </Route>
         <Route path="/home">
                        <Home />
                        
         </Route>
      </Switch>
      
      <Navbar />
      <Footer />

    </div>
  );
}

export default App;

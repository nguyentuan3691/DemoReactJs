import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'



function App() {
  return (
    <div>
     <Home />

    </div>
  );
}

export default App;

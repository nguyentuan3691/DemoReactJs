import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidenav from './Sidenav';
import Footer from './Footer';
import Login from './Login';
import Navbar from './Navbar';


function Home() {
  return (
    <div className="App">

      <Navbar />
      {/* <Sidenav /> */}
      <Footer />

    </div>
  );
}

export default Home;
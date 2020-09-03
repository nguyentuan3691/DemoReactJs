import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../pages/Login';

class RouterURL extends Component {
    render() {
        return (
            <div>
              <Switch>
      <Route path="/login">
                        <Login />
                        
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
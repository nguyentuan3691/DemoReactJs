import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Login from './Login';


class AuthPage extends Component {
    render() {
        return (
            <div>


                <Switch>
                    {/* <Redirect exact from="/" to="/login" /> */}
                    <Route path="/login" component={Login} />
                    
                </Switch>

                <div>
                    <span className="font-weight-bold text-success">Don't have an account yet?</span>
                    <Link to="/registration" className="font-weight-bold ml-2">Sign Up!</Link>
                </div>

                <div>
                    <span className="font-weight-bold text-danger">
                        <Link to="/forgot-password" className="font-weight-bold ml-2">Forgot your password</Link>
                    </span>
                </div>

            </div>
        );
    }
}

export default AuthPage;
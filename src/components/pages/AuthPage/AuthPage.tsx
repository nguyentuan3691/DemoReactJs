import React, { Component } from 'react';
import { Switch, Link, Redirect, Route } from 'react-router-dom';
import Login from './Login';


class AuthPage extends Component {
    render() {
        return (
            <div>


                <Switch>
                    <Route path="/login" component={Login} />
                    
                </Switch>

                <form className="login-page text-center" style={{margin: '-12% auto', padding: '20px',border: 'none'}}>
                {/* <div>
                    <span className=" text-dark">Don't have an account yet?</span>
                    <Link to="/registration" className=" ml-2 font-weight-bold">Sign Up!</Link>
                </div> */}

                {/* <div>
                    <span className="text-primary">
                        <Link to="/forgot-password" className=" ml-2">Forgot your password ?</Link>
                    </span>
                </div> */}
                </form>

            </div>
        );
    }
}

export default AuthPage;
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="col-md-4">
                <form>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" defaultValue="Login" />
                </form>
                
            </div>
        );
    }
}

export default Login;
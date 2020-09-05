import React, { Component } from 'react';
import "../../../assets/components/pages/Login.scss";

class Register extends Component {
    render() {
        return (
            <div>
                <form className="login-page">
                    <h2 className="text-center">Register</h2>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12 mb-3">
                 
                            <input type="email" className="form-control" placeholder="Last name" required />
                        </div>
                        <div className="col-md-12 mb-3">
                      
                            <input type="text" className="form-control" placeholder="First name" required />
                        </div>
                        <div className="col-md-12 mb-3">
                     
                            <input type="text" className="form-control" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-info btn-block">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
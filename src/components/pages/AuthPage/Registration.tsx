import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Last name" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-info">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
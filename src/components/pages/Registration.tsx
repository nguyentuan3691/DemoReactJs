import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Register</h2>
                <form>
                    <div className="form-row ml-2">
                        <div className="col-5">
                            <label className="float-left">Phone Number</label>
                            <input type="number" className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="col-5">
                            <label className="float-left">Password</label>
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 mb-3">
                            <label className="float-left">Options</label>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Choose level</option>
                                <option value="1">Reviewer</option>
                                <option value="2">Employee</option>
                                <option value="3">Leader</option>
                                <option value="4">Administrator</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 mb-3">
                            <label className="float-left">Email</label>
                            <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="float-left">FullName</label>
                            <input type="text" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="float-left">Birthday</label>
                            <input type="date" className="form-control" placeholder="Birthday" required />
                        </div>
                        <div className="col-md-12  ">
                            <label className="float-left">Note</label>
                            <textarea className="form-control" rows={3} defaultValue={""} placeholder="Note here" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info btn-block">Sign up</button>
                </form>
            </div>
        )
    }
}

export default Register;
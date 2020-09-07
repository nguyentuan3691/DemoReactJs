import React, { Component } from "react";
import { connect } from "react-redux"
import { getInfoUserLogin } from "../../store/actions/authAction";

class InformationUser extends Component {
    state = {
        Account: {
            FullName: ""
        }
    };

    async componentDidMount() {
        var account = await getInfoUserLogin();
        this.setState({ Account: account.Data.Account });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-4">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" className="Avatar-Profile"/>
                        <h3 className="font-weight-bold">{this.state.Account.FullName}</h3>
                        <p className="text-muted font-weight-bold">Web Developer</p>
                        <p className="font-weight-bold ">Owner</p>
                        <hr/>
                        <div className="list-group">
                        <a href="#" className="list-group-item">Account Infomation</a>
                        <br/>
                        <a href="#" className="list-group-item">Change Password</a>
                        <br/>
                        <a href="#" className="list-group-item">Email Settings</a>
                        </div>
                            <br/>
                    </div>
                    <div className="col-8">
       
                      <form>
                        <div className="form-group row">
                          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                          <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                          </div>
                          <button type="submit" className="btn btn-info" style={{width: '150px'}}>Edit Profile</button>
                        </div>
                          <hr/>
                        <div className="form-group row">
                          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                          </div>
                        </div>
                        <hr/>
                      </form>

                    </div>
                   
                </div>
            </div>
        );
    }
}


export default InformationUser;
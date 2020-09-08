import React, { Component } from 'react';
import {changePassword, getInfoUserLogin} from '../../store/actions/authAction'

class ChangePassword extends Component {
    state = {
        Data: {
            Id: "",
            CurrentPassword: "",
            Password: "",
        },
        status: false
    };

    async componentDidMount() {
        let account = await getInfoUserLogin();
        this.setState({
            Data: account.Data.Account
        });
    }

    handleChange = (e: any) => {
        let state: any = this.state;
        let data: any = state.Data;
        data[e.target.name] = e.target.value;
        this.setState({
            state
        });
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.changePasswordUser();
    }

    changePasswordUser = () => {
        let formChangePassword = {
            Id: this.state.Data.Id,
            CurrentPassword: this.state.Data.CurrentPassword,
            Password: this.state.Data.Password
        }
        return changePassword(formChangePassword)
    }

    isNotLoadPage = (e: any) => {
        e.preventDefault();
        this.setState({
            status: !this.state.status
        });
    }

    showForm = () => {
        if (this.state.status) {
            return (
                <div>
                    <button
                        type="submit"
                        className="btn btn-success font-weight-bold"
                        onSubmit={(e) => this.handleSubmit(e)}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark font-weight-bold"
                        onClick={(e) => this.isNotLoadPage(e)}
                    >
                        Cancel
                    </button>
                    <div className="form-group ">
                        <label className="float-left">Current Password</label>
                        <input
                            type="number"
                            className="form-control"
                            name="CurrentPassword"
                            placeholder="Your old password"
                        />
                    </div>
                    <div className="form-group ">
                        <label className="float-left">New Password</label>
                        <input
                            type="number"
                            className="form-control"
                            name="Password"
                            placeholder="Your new password"
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-warning font-weight-bold"
                        onClick={(e) => this.isNotLoadPage(e)}
                    >
                        Change Password
                    </button>
                </div>)
        }
    }

    render() {
        return (
            <div>
                <form 
                    onChange={(e) => this.handleChange(e)}
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <div className="ml-3">

                        {this.showForm()}
                    </div>
                </form>
            </div>
        );
    }
}


export default ChangePassword;
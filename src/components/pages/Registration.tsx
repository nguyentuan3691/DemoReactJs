import React, { Component } from 'react';
import { registerNewUser, getInfoUserLogin, accountType } from '../../store/actions/authAction'

class Register extends Component {
    state = {
        Data: {
            AccountTypeId: '',
            PhoneNumber: '',
            Email: '',
            FullName: '',
            Gender: '',
            Birthday: '',
            Password: '',
            Address: '',
            Note: '',
        },
    }

    async componentDidMount() {
        let account = await getInfoUserLogin();
        let accountTypeId = await accountType()
        console.log(accountTypeId);
        
        this.setState({
            Data: account.Data.Account,
        });
    }

    handleChange = (e: any) => {
        let state: any = this.state;
        let data: any = state.Data;
        data[e.target.name] = e.target.value
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.registerNewUser()
    }

    registerNewUser = () => {
        let formRegister = {
            AccountTypeId: this.state.Data.AccountTypeId,
            PhoneNumber: this.state.Data.PhoneNumber,
            Email: this.state.Data.Email,
            FullName: this.state.Data.FullName,
            Gender: this.state.Data.Gender,
            Birthday: this.state.Data.Birthday,
            Password: this.state.Data.Password,
            Address: this.state.Data.Address,
            Note: this.state.Data.Note,
        }
        return registerNewUser(formRegister)
    }

    showGender = () => {
        // return value ? <option value="true">{this.state.Data.Gender}</option> : <option value="false">{this.state.Data.Gender}</option>;
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Create New member</h2>
                <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-row ml-2">
                        <div className="col-5">
                            <label className="float-left">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="Phone Number" minLength={10} name="PhoneNumber" required />
                        </div>
                        <div className="col-5">
                            <label className="float-left">Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="Password" minLength={5} required />
                        </div>
                    </div>
                    <div className="form-row ml-2 my-2">
                        <div className="col-5">
                            <label className="float-left">Permissions</label>
                            <select className="custom-select" name="AccountTypeId">
                                <option selected hidden>Choose Permissions</option>
                                <option value="Reviewer">Reviewer</option>
                                <option value="Employee">Employee</option>
                                <option value="Leader">Leader</option>
                                <option value="Administrator">Administrator</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <label className="float-left">Gender</label>
                            <select className="custom-select" name="Gender">
                                <option selected hidden>Choose Gender</option>
                                {/* {this.showGender()} */}
                                <option value="true">Male</option>
                                <option value="false">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 mb-3">
                            <label className="float-left">Email</label>
                            <input type="email" className="form-control" placeholder="Email" name="Email" required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="float-left">FullName</label>
                            <input type="text" className="form-control" placeholder="Full Name" name="FullName" minLength={8} required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label className="float-left">Birthday</label>
                            <input type="date" className="form-control" placeholder="Birthday" name="Birthday" required />
                        </div>
                        <div className="col-md-12  ">
                            <label className="float-left">Note</label>
                            <textarea className="form-control" rows={3} name="Note" placeholder="Note here" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Create New Member</button>
                </form>
            </div>
        )
    }
}

export default Register;
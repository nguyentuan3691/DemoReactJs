import React, { Component } from "react";
import { getInfoUserLogin, updateUser, post_image } from "../../store/actions/authAction";
import ChangePassword from "./ChangePassword";
// import {connect} from "react-redux";


let moment = require('moment');

class InformationUser extends Component {
    props: any = this.props;
    state = {
        url: null,
        Data: {
            Id: "",
            FullName: "",
            AccountType: "",
            Birthday: "",
            Address: "",
            AvatarUrl: "",
            PhoneNumber: "",
            Gender: "",
            Email: "",
            Password: "",
        },
    };

    showDOB = () => {
        return moment(this.state.Data.Birthday).format("DD/MM/YYYY");
    }
   
    showGender = () => {
        return this.state.Data.Gender ? "Male" : "Female";
    }


    async GetImage = () =>{

    }
    onFileChange = (e:any) =>{
        const formData = new FormData();
      let AvatarUrl = e.target.files[0];
      // let limit = 1024 * 1024 * 2;
      // if (file["size"] > limit) {
      //   Swal({
      //     type: "error",
      //     title: "Oops...",
      //     text: "You are uploading a large file"
      //   });
      //   return false;
      // }
      formData.append("image", AvatarUrl);
      this.
      //Tranfer data to get
      AvatarUrl = this.state.Data.AvatarUrl;
    //   this.state.Data.AvatarUrl = URL?.createObjectURL(AvatarUrl);
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
        this.updateUserData()
        
        this.showDOB()
    }

    updateUserData = () => {
        let dataUser = {
            Id: this.state.Data.Id,
            PhoneNumber: this.state.Data.PhoneNumber,
            Email: this.state.Data.Email,
            FullName: this.state.Data.FullName,
            AvatarUrl: this.state.Data.AvatarUrl,
            Birthday: moment(this.state.Data.Birthday).format("DD/MM/YYYY"),
            Address: this.state.Data.Address,
        }
        return updateUser(dataUser)
    }

    async componentDidMount() {
        let data = this.state.Data.AvatarUrl;
        let account = await getInfoUserLogin();
        this.setState({
            Data: account.Data.Account,
            
        });
        let url = await post_image(data);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img
                            src={this.state.Data.AvatarUrl}
                            className="Avatar-Profile"
                            alt="avatar"
                        />
                       
                        <h3 className="font-weight-bold">{this.state.Data.FullName}</h3>
                        <p className="text-muted font-weight-bold">{this.state.Data.AccountType}</p>
                        <p className="font-weight-bold ">{this.state.Data.PhoneNumber}</p>
                        <p className="font-weight-bold ">{this.showGender()}</p>
                        <p className="font-weight-bold ">{this.showDOB()}</p>
                        <p className="font-weight-bold ">{this.state.Data.Address}</p>
                        <p className="font-weight-bold ">{this.state.Data.Email}</p>
                        <hr />
                        <ChangePassword />
                        
                    </div>
                    <div className="col-8">
                        <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                            
                            <button
                                type="submit"
                                className="btn btn-info"
                            >
                                Save
                            </button>
                            <hr />
                            <input type="file" name="profile_avatar"  accept=".png, .jpg, .jpeg"  onChange={(e) => this.onFileChange(e)}/>
                            <div className="form-group ">
                                <label className="float-left">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="FullName"
                                    defaultValue={this.state.Data.FullName}
                                />
                            </div>
                            <div className="form-group ">
                                <label className="float-left">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="Birthday"
                                    defaultValue={this.showDOB()}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="Email"
                                    defaultValue={this.state.Data.Email}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Address"
                                    defaultValue={this.state.Data.Address}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InformationUser;
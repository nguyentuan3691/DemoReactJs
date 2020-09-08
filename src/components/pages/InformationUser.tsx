import React, { Component } from "react";
import { getInfoUserLogin, updateUser,post_image } from "../../store/actions/authAction"
let moment = require('moment');



class InformationUser extends Component {
    state = {
        url : null,
        Data: {
            Id: "",
            FullName: "",
            AccountType: "",
            Birthday: Date,
            Address: "",
            AvatarUrl: "",
            PhoneNumber: "",
            Gender: "",
            Email: "",
            ImageUrl: ""
        }
    };

    showDOB = () => {
        return moment(this.state.Data.Birthday).format("DD/MM/YYYY");
    }
    showGender = () => {
        return this.state.Data.Gender ? "Male" : "Female"
    }

    handleChange = (e: any) => {
        let state: any = this.state;
        let data: any = state.Data;
        data[e.target.name] = e.target.value;
        this.setState({
            state
        });
    }
    // Call from authAction
    
     async GetImage(formData:any) {
       console.log(post_image)
        return await post_image(formData);
     } 
     onFileChange(event:any) {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append("image", file);
        this.GetImage(formData);
        this.state.Data.AvatarUrl = URL?.createObjectURL(file);
        return false;
      }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.updateUserData();
    }

    updateUserData = () => {
        var moment = require('moment');
        let dataUser = {
            Id: this.state.Data.Id,
            PhoneNumber: this.state.Data.PhoneNumber,
            Email: this.state.Data.Email,
            FullName: this.state.Data.FullName,
            AvatarUrl: this.state.Data.AvatarUrl,
            Birthday: moment(this.state.Data.Birthday).format(),
            Address: this.state.Data.Address,
        }
        console.log(dataUser);
        return updateUser(dataUser)
    }

    // saveData = () => {
    //     let userInfo = {};
    //     userInfo.name = this.state.Data.FullName;
    // }

    async componentDidMount() {
        let account = await getInfoUserLogin();
        this.setState({
            Data: account.Data.Account
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                       <form >
                       <img src="{this.state.Data.AvatarUrl}" alt="Avatar"/>
                       <p>{this.state.Data.AvatarUrl}</p>
                       <input type="file" onChange={(e)=> this.onFileChange(e)} name="profile_avatar"  accept=".png, .jpg, .jpeg"  />
                            <h3 className="font-weight-bold">{this.state.Data.FullName}</h3>
                            <p className="text-muted font-weight-bold">{this.state.Data.AccountType}</p>
                            <p className="font-weight-bold ">{this.state.Data.PhoneNumber}</p>
                            <p className="font-weight-bold ">{this.showGender()}</p>
                            <p className="font-weight-bold ">{this.state.Data.Birthday}</p>
                            <p className="font-weight-bold ">{this.state.Data.Address}</p>
                            <hr />
                            <br />
                       </form>
                    </div>
                    <div className="col-8">
                        <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                               
                                {/* <button
                                    type="submit"
                                    className="btn btn-dark"
                                >
                                    Cancel
                                </button> */}
                            </div>
                            <hr />
                            <div className="form-group ">
                                <label className="float-left">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control-plaintext"
                                    name="FullName"
                                    defaultValue={this.state.Data.FullName}
                                />
                            </div>
                            <div className="form-group ">
                                <label className="float-left">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control-plaintext"
                                    name="Birthday"
                                    defaultValue={this.showDOB()}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Phone</label>
                                <input
                                    type="number"
                                    className="form-control-plaintext"
                                    name="PhoneNumber"
                                    defaultValue={this.state.Data.PhoneNumber}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Email</label>
                                <input
                                    type="email"
                                    className="form-control-plaintext"
                                    name="Email"
                                    defaultValue={this.state.Data.Email}
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Address</label>
                                <input
                                    type="text"
                                    className="form-control-plaintext"
                                    name="Address"
                                    defaultValue={this.state.Data.Address}
                                />
                            </div>
                            <button
                                    type="submit"
                                    className="btn btn-info w-25 float-right"
                                >
                                    Save
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        // status: state.status,
        editUser: state.editUser
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: 'CHANGE_STATUS'
            })
        },
        getEditData: (editObj: any) => {
            dispatch({
                type: 'GET_EDIT_DATA',
                editObj //tham số nhận vào  
            })
        }
    }
}


export default InformationUser;

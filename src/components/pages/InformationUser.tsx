import React, { Component } from "react";
import {
  getInfoUserLogin,
  updateUser,
  post_image,
} from "../../store/actions/authAction";
import ChangePassword from "./ChangePassword";

let moment = require("moment");

class InformationUser extends Component {
  props: any = this.props;
  state = {
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
  };

  showGender = () => {
    return this.state.Data.Gender ? "Male" : "Female";
  };

  onFileChange = () => {
    let dataImage = {
      AvatarUrl: this.state.Data.AvatarUrl,
    };
    return post_image(dataImage);
    // const formData = new FormData();
    // let file = dataImage.target.files;
    // formData.append("image", file,blob);
    // let url = URL?.createObjectURL(file);
    // this.state.Data.AvatarUrl = this.state.Data.ImageUrl;
  };

  loadImage = (): void => {
      window.open(this.state.Data.AvatarUrl, "")
  }
  
  handleChange = (e: any) => {
    let state: any = this.state;
    let data: any = state.Data;
    data[e.target.name] = e.target.value;
    this.setState({
      state,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.onFileChange();
    this.updateUserData();

    this.showDOB();
    
  };

  updateUserData = () => {
    let dataUser = {
      Id: this.state.Data.Id,
      PhoneNumber: this.state.Data.PhoneNumber,
      Email: this.state.Data.Email,
      FullName: this.state.Data.FullName,
      AvatarUrl: this.state.Data.AvatarUrl,
      Birthday: moment(this.state.Data.Birthday).format("DD/MM/YYYY"),
      Address: this.state.Data.Address,
    };
    return updateUser(dataUser);
  };

  async componentDidMount() {
      let account = await getInfoUserLogin();
      console.log(account);
      this.setState({
        Data: account.Data.Account,
      });
    // let data = this.state.Data.AvatarUrl;
    // let url = await post_image(data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={this.state.Data.AvatarUrl} className="Avatar-Profile" alt="avatar" />

            <h3 className="font-weight-bold">{this.state.Data.FullName}</h3>
            <p className="text-muted font-weight-bold">
              {this.state.Data.AccountType}
            </p>
            <p className="font-weight-bold ">{this.state.Data.PhoneNumber}</p>
            <p className="font-weight-bold ">{this.showGender()}</p>
            <p className="font-weight-bold ">{this.showDOB()}</p>
            <p className="font-weight-bold ">{this.state.Data.Address}</p>
            <p className="font-weight-bold ">{this.state.Data.Email}</p>
            <hr />
            <ChangePassword />
          </div>
          <div className="col-8">
            <form
              onChange={(e) => this.handleChange(e)}
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <button type="submit" className="btn btn-info">
                Save
              </button>
              <hr />
              {/*  */}
              <input type="file" name="AvatarUrl" accept=".png, .jpg, .jpeg" />
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

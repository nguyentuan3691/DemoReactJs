import React, { Component } from "react";
import { getInfoUserLogin, updateUser } from "../../store/actions/authAction"
import { connect } from "react-redux";

class InformationUser extends Component {
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
        },
    };

    showDOB = () => {
        const date = new Date(1991, 6, 4)
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
        return `${day}-${month}-${year}`
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

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.updateUserData()
    }

    updateUserData = () => {
        let dataUser = {
            Id: this.state.Data.Id,
            PhoneNumber: this.state.Data.PhoneNumber,
            Email: this.state.Data.Email,
            FullName: this.state.Data.FullName,
            AvatarUrl: this.state.Data.AvatarUrl,
            Birthday: this.state.Data.Birthday,
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
                        <hr />
                        <br />
                    </div>
                    <div className="col-8">
                        <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-info"
                                >
                                    Save
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-dark"
                                >
                                    Cancel
                                </button>
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
                                    type="text"
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


export default connect(mapStateToProps, mapDispatchToProps)(InformationUser);

//Cách lấy dữ liệu
//1. Đẩy dứ liệu lên trên store: tạo reducer, statestate
//2. store update trong state: tạo case chứa state và tham số truyền vào là 1 obj
//3. Đẩy dữ liệu từ state vào trong form: dùng hàm subscribe để theo dõi
//4. Form nhận được
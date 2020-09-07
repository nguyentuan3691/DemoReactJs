import React, { Component } from "react";
import { getInfoUserLogin } from "../../store/actions/authAction";
import { connect } from "react-redux";

class InformationUser extends Component {
    props: any = this.props;
    state = {
        Data: {
            FullName: "",
            AccountType: "",
            Birthday: "",
            Address: "",
            AvatarUrl: "",
            PhoneNumber: "",
        },
    };

    handleChange = (e: any) => {
        let state: any = this.state;
        let data: any = state.Data;
        data[e.target.name] = e.target.value;
        this.setState({
            state
        });
    }

    async componentDidMount() {
        let account = await getInfoUserLogin();
        this.setState({
            Data: account.Data.Account
        });
    }

    showForm = () => {
        // console.log("test status from component", this.props.status);
        if (this.props.status) {
            return (
                <div>
                    <form onChange={(e) => this.handleChange(e)}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control-plaintext"
                                    name="PhoneNumber"
                                    defaultValue={this.state.Data.PhoneNumber}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="FullName" defaultValue={this.state.Data.FullName} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">DOB</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" />
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    twoActionButton = (e: any) => {
        e.preventDefault();
        this.props.changeEditStatus()
        this.props.getEditData(this.state.Data)
    }

    render() {
        console.log(this.props.editUser);
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img
                            src={this.state.Data.AvatarUrl}
                            className="Avatar-Profile"
                            alt="hehe"
                        />
                        <h3 className="font-weight-bold">{this.state.Data.FullName}</h3>
                        <p className="text-muted font-weight-bold">{this.state.Data.AccountType}</p>
                        <p className="font-weight-bold ">{this.state.Data.PhoneNumber}</p>
                        <p className="font-weight-bold ">{this.state.Data.Address}</p>
                        <hr />
                        <br />
                    </div>
                    <div className="col-8">

                        <form>

                            <div>
                                <button type="submit" className="btn btn-info" onClick={(e) => this.twoActionButton(e)} >Edit Profile</button>
                                <button type="submit" className="btn btn-dark" >Cancel</button>
                            </div>
                            <hr />
                            {this.showForm()}
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

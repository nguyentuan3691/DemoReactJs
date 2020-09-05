import React, { Component } from "react";
import { connect } from "react-redux"
import { getInfoUserLogin } from "../../store/actions/authAction";

class InformationUser extends Component {
    state = {Account: {
        FullName: ""
    }};
    
    async componentDidMount() {
        var account = await getInfoUserLogin();
        this.setState({Account: account.Data.Account});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h3>Name</h3>
                        <p>phone</p>
                        <p>location</p>
                        <p>DOB</p>
                    </div>
                    <div className="col-8">
                        <form>
                            <label>Name</label>
                            <input type="text" placeholder="Name" value={this.state.Account.FullName} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapDispatchtoProps = (dispatch: any) => {
//     return {
//         accountInfo:  dispatch({type: "GET_INFO_USER_SUCCESS"})
//     }
// }

export default InformationUser;
// export default connect(mapDispatchtoProps)(Demo1Dashboard);

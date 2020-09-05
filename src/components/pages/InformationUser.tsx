import React, { Component } from "react";
import {connect} from "react-redux"
import { getInfoUserLogin } from "../../store/actions/authAction";

class InformationUser extends Component {
  async componentDidMount() {
    await getInfoUserLogin();
    console.log("test from componentDidMount ");
    console.log("test from getInfoUserLogin ", getInfoUserLogin);
  }
  render() {
     console.log("test from render InformationUser");
     
    return (
      <div className="container">
        <div className="col-8">
            hello world
        </div>
        <div className="col-4"></div>
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

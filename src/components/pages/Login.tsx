import * as React from "react";
import { loginUser } from '../../store/actions/loginAction'
import { connect } from "react-redux";


// interface ILoginState {
//   PhoneNumber?: string,
//   Password?: string,
// }

// interface ILoginProps {
//   // children?: React.ReactNode;
//   // loginUser(): void;
// }

class Login extends React.Component {
  [x: string]: any;
  // constructor(props: ILoginState) {
  //   super(props);
  //   this.state = {
  //     PhoneNumber: "",
  //     Password: "",
  //   };
  // }
  // state: Readonly<ILoginState> = {
  //   PhoneNumber: "",
  //   Password: "",
  // }
  
  // handleChange = (e: any) => {
    
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);

  //   this.postUser("0123456798", "12346");
  //   // this.setState({
  //   //   [name]: value,
  //   // });
  // };

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit");
    var userName = e.target["PhoneNumber"].value;
    var password = e.target["Password"].value;
    
    this.postUser(userName, password);
  };

  postUser = async (userName: string, password: string) => {
    console.log("postUser");
    const formValues = {
      PhoneNumber: userName,
      Password: password,
    };
    return loginUser(formValues);
    //this.props.loginUser(formValues);
  };

  render() {
    return (
      <div>
        <form
          autoComplete="off"
          onChange={(e) => this.handleChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="form-group">
            <label>Phone Number</label>
            <input
              minLength={8}
              name="PhoneNumber"
              type="number"
              className="form-control"
              required
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="Password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

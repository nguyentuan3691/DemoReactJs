import * as React from "react";
import { loginUser } from '../../../store/actions/loginAction';
import "../../../assets/components/pages/Login.scss";


// interface ILoginState {
//   PhoneNumber?: string,
//   Password?: string,
// }

// interface ILoginProps {
//   // children?: React.ReactNode;
//   // loginUser(): void;
// }

class Login extends React.Component {
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
  };

  render() {
    return (
      <div>
       <form className="login-page"
          autoComplete="off"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <h2 className="text-center font-weight-bold text-login-top">Login</h2>
          <small className="form-text text-muted text-center">
            Sign in to start your session
            </small>
          <div className="form-group has-feedback">
            <input
              minLength={8}
              name="PhoneNumber"
              type="number"
              className="form-control"
              placeholder="Phone Numbers *"
              required
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group ">
            <input type="password" name="Password" className="form-control" placeholder="Password *"/>
          </div>
          
          <button type="submit" className="button btn-primary btn-submit">
           <span>Submit</span>
          </button>
          
        </form>
        
      </div>
    );
  }
}

export default Login;

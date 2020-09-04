import * as React from "react";
import { loginUser } from '../../../store/actions/loginAction'


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
        <form
          autoComplete="off"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input
                minLength={8}
                name="PhoneNumber"
                type="number"
                className="form-control"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" name="Password" placeholder="Password" />
            </div>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

import * as React from "react";
import { loginUser } from '../../store/actions/loginAction'
import { connect } from "react-redux";

interface ILoginProps {
  children?: React.ReactNode;
  function?: () => void;
}

interface ILoginState {
  PhoneNumber?: String
  Password?: String
}


class Login extends React.Component<ILoginProps, ILoginState> {
  // constructor(props: ILoginState) {
  //   super(props);
  //   this.state = {
  //     PhoneNumber: "",
  //     Password: "",
  //   };
  // }
  state: Readonly<ILoginState> = {
    PhoneNumber: "",
    Password: "",
  }
  
  handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.postUser()
  };

  postUser = async () => {
    const formValues = {
      PhoneNumber: this.state.PhoneNumber,
      Password: this.state.Password,
    };
    await this.props.loginUser(formValues);
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

export default connect(loginUser)(Login);

import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PhoneNumber: "",
      Password: "",
    };
  }

  handleChange = (e) => { };

  handleSubmit = () => { };

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Phone Number</label>
            <input
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

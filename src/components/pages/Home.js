import React, { Component } from 'react';
import '../../assets/components/pages/Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                 <form action="/action_page.php">
        <div className="row">
          <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>
          <div className="col">
            <a href="#" className="fb btn">
              <i className="fa fa-facebook fa-fw" /> Login with Facebook
            </a>
            <a href="#" className="twitter btn">
              <i className="fa fa-twitter fa-fw" /> Login with Twitter
            </a>
            <a href="#" className="google btn"><i className="fa fa-google fa-fw">
              </i> Login with Google+
            </a>
          </div>
          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" defaultValue="Login" />
          </div>
        </div>
      </form>
            </div>
        );
    }
}

export default Home;
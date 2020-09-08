import React from 'react';
import '../../assets/components/pages/Navbar.scss';
import { Link, Route } from 'react-router-dom';
import InformationUser from './InformationUser';
import Registration from './Registration';

interface Item {
  id: number;
  text: string;
}

// const DEFAULT_ITEMS: Item[] = [
//   { id: 1, text: 'Convert my App to TypeScript' },
//   { id: 2, text: 'Get a coffee' },
// ];

const Navbar = (): JSX.Element => {
  // const [] = useState<Item[]>(DEFAULT_ITEMS);

  const logout = () => {
    localStorage.clear();
    window.location.assign('/login');
  }

  return <div>
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <img src="https://dev.cleverbee.me/plight/images/brand/logo.png" alt="img" />
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a href="/home"><span>Home</span></a>
          </li>

          <li>
            <Link to="/home/information-update">
              Update Infomation
            </Link>
          </li>

          <li>
            <Link to="/home/create-member">
              Create Member
            </Link>
          </li>

          <li style={{ bottom: '1px' }}>
            <span onClick={() => logout()}>Logout</span>
          </li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://mdbootstrap.com/docs/standard/">
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav list-inline mr-auto ml-auto">
                <div className="input-group md-form form-sm form-2 pl-0">
                  <input
                    className="form-control my-0 py-1 amber-border"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div
                    className="input-group-append"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      style={{
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                      className="input-group-text amber lighten-3"
                      id="basic-text1"
                    >
                      <i
                        className="fa fa-search text-grey"
                        aria-hidden="true"
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  </div>
                </div>
              </ul>
              <ul className="navbar-nav list-inline ml-auto">
                <li>
                  <img
                    src=""
                    alt="Avatar"
                    className="avatar"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <Route path="/home/information-update" component={InformationUser}/>
      <Route path="/home/create-member" component={Registration}/>
      </div>
    </div>
  </div>
};

export default Navbar;
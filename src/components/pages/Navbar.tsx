import React, { useState } from 'react';
import { Component } from 'react';
import '../../assets/components/pages/Navbar.scss';

import { Link } from 'react-router-dom';

interface Item {
  id: number;
  text: string;
}

const DEFAULT_ITEMS: Item[] = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Navbar = (): JSX.Element => {
  const [] = useState<Item[]>(DEFAULT_ITEMS);

  const logout = () => {
    localStorage.clear();
    window.location.assign('/login');
  }

  return <div>
    <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <img src="https://dev.cleverbee.me/plight/images/brand/logo.png"></img>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a href="/home"><span>Home</span></a>
              {/* <ul className="collapse list-unstyled" id="homeSubmenu">
               
              </ul> */}
            </li>
          
                <li>
                  <a href="/"><span>Update Infomation</span></a>
                </li>
              {/* <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Pages
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <Link to="/">Page 1</Link>
                  </li>
                  <li>
                    <Link to="/">Page 2</Link>
                  </li>
                  <li>
                    <Link to="/">Page 3</Link>
                  </li>
                </ul>
              </li> */}
            {/* <li>
              <Link to="/">Portfolio</Link>
            </li> */}
            <li style={{bottom: '1px'}}>
              <Link to="/login"><span>Logout</span></Link>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* Navbar brand */}
              <a className="navbar-brand" target="_blank" href="https://mdbootstrap.com/docs/standard/">
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
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <button className="navbar-toggler" type="button">
                    HAHAHA
                  </button>
                </ul>
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
                  {/* Icons */}
                  <li >
                    <a
                      className="nav-link"
                      href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li >
                    <a
                      className="nav-link"
                      href="https://www.facebook.com/mdbootstrap"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://twitter.com/MDBootstrap"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://github.com/mdbootstrap/mdb-ui-kit"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://cleverbee.me/plight/images/faces/female/25.jpg"
                        alt="Avatar"
                        className="avatar"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
  </div>;
  ;
};

export default Navbar;
import React, { Component } from 'react';
import '../../assets/components/pages/Navbar.scss';


class Navbar extends Component {
    render() {
        return (
            
            <div class="wrapper">

    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>REACTJS</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Menu</p>
            <li class="active">
            <a href="/home">Home 3</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/login">Login</a>
                        
                    </li>
                    <li>
                        <a href="/home">Home 2</a>
                    </li>
                    <li>
                        <a href="/home">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

    </nav>
 
    <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Navbar brand */}
          <a className="navbar-brand" target="_blank" href="https://mdbootstrap.com/docs/standard/">
            <i className="fab fa-youtube" style={{color: 'red'}} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <button className="navbar-toggler" type="button">HAHAHA
              </button>
            </ul>
            <ul className="navbar-nav list-inline mr-auto ml-auto">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
                <div className="input-group-append" style={{cursor: 'pointer'}}>
                  <span style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}} className="input-group-text amber lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true" style={{paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}} /></span>
                </div>
              </div>
            </ul>
            <ul className="navbar-nav list-inline ml-auto">
              {/* Icons */}
              <li className>
                <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li className>
                <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href>
                  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    </div>
</div>
        );
    }
}

export default Navbar;
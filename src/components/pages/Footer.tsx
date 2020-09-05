import React, { Component } from 'react';

import '../../assets/components/pages/Navbar.scss';


class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="bg-light text-lg-left sidebar-layout" style={{position: 'fixed', bottom: '1px', width: '100%',left: '250px'}}>
                    <hr className="m-0" />
                    <div className="text-center p-3" style={{backgroundColor: 'whitesmoke'}}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">Quang</a>
                    </div>
                </footer> 
            </div>
        );
    }
}

export default Footer;
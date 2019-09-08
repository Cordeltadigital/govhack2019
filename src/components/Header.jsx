import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <Navbar className="header" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="Home"
            src={logo}
            width="160"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        {/* <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          
          <Link className="nav-item nav-link"  to="/route/123">Route 123</Link>
        </div> */}
      </div>
      </Navbar> );
  }
}
 
export default Header 
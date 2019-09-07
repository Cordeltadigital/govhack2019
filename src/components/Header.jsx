import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Little Bird'}
        </Navbar.Brand>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          
          <Link className="nav-item nav-link"  to="/route/123">Route 123</Link>
        </div>
      </div>
      </Navbar> );
  }
}
 
export default Header 
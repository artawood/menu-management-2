import React from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../Icons";
import { Navbar } from "react-bootstrap";

const Header = props => (
  <Navbar bg="white" variant="dark" fixed="top" className="shadow navbar-large">
    <h1 className="pt-3 pr-4 menu-btn" onClick={() => props.toggleSidebar()}>
      <Hamburger />
    </h1>
    <Navbar.Brand className="pl-2">
      <Link to="/">
        <img
          alt=""
          src="https://www.itsacheckmate.com/wp-content/uploads/2019/05/ItsaCheckmateLogo_Horizontal_Color_4.png"
          className="d-inline-block align-top logo"
        />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {/* <span className="login-text">Signed in as: <span className="username">Vishal Agarwal</span></span> */}
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

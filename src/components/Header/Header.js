import React from "react";
import { Link } from "react-router-dom";
import { Hamburger, Logo } from "../Icons";
import { Navbar } from "react-bootstrap";

const style = {
  color: "#000000"
};
class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSetSidebarDocked = this.onSetSidebarDocked.bind(this);

    this.state = {
      docked: true
    };
  }

  onSetSidebarDocked() {
    if (this.state.docked) {
      this.setState({
        docked: false
      });
    } else {
      this.setState({
        docked: true
      });
    }
  }

  render() {
    return (
      <Navbar bg="white" variant="dark" fixed="top" className="shadow navbar-large">
        {/* <h1 className="pt-3 pr-4 menu-btn" onClick={() => this.onSetSidebarDocked()}>
          <Hamburger width="45" height="40" />
        </h1> */}
        <Navbar.Brand className="pl-2">
          <Link to="/">
            <Logo height="32" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mr-4">
            <Link to="/" style={style}>
              Log Out
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

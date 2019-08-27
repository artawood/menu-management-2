import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class CustomDropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <Link to="" onClick={this.handleClick}>
        {this.props.children}
      </Link>
    );
  }
}

export default CustomDropdown;

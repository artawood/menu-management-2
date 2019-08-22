import React from "react";
import { Nav } from "react-bootstrap";

const style = {
  color: "#04A89B",
  fontSize: "18px"
};

const ToggleExpandAll = props => (
  <Nav>
    <Nav.Link onClick={props.toggleExpandAll} style={style}>
      {props.collapseText}
    </Nav.Link>
  </Nav>
);

export default ToggleExpandAll;

import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./ToggleExpandAll.module.css";

const ToggleExpandAll = props => (
  <Nav className={styles.hover}>
    <Nav.Link onClick={props.toggleExpandAll} className={styles.link}>
      {props.collapseText}
    </Nav.Link>
  </Nav>
);

export default ToggleExpandAll;

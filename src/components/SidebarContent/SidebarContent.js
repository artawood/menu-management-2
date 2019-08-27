import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SidebarContent.css";

// Modal Components
import FetchData from "../Modals/FetchDataModal";
import PushChanges from "../Modals/PushChangesModal";
import { Home } from "../Icons";
import LocationSelector from "../LocationSelector";

const styles = {
  sidebar: {
    width: 250,
    height: "100%",
    padding: "50px 0px 0px 0px",
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
    backgroundColor: "#141A25"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#04A89B",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#D8D8D8"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "#313842"
  },
  option: {
    padding: "30px 50px 10px"
  },
  navLink: {
    fontWeight: 500,
    color: "#DFDFDF",
    fontSize: 14
  },
  isActive: {
    color: "#FFFFFF"
  }
};

const newTimeStamp = new Date().getTime();

const SidebarContent = props => {
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;

  return (
    <div style={style}>
      <nav className="d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column option">
            <li className="nav-item hover mx-auto mb-5">
              <Link style={styles.navLink} to="/location-management">
                &lt; Back to Location Management
              </Link>
            </li>
            <li className="nav-item hover mx-auto mb-5">
              <LocationSelector id={props.id} />
            </li>
            <FetchData />
            <PushChanges onClick={() => this.props.pushTimeStamp(newTimeStamp)} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Nav } from "react-bootstrap";
import ToggleOffline from "../Togglers/ToggleOffline";
import { MenuManagement, ChevronDown } from "../Icons";
import OfflineDayDropdown from "../OfflineDayDropdown";
import styles from "./LocationCard.module.css";

const style = {
  card: {
    fontSize: "16px",
    overflow: "visible"
  }
};

//var for adjusting responsive with conditional rendering
const windowInnerWidth = Window.innerWidth;

const LocationCard = props => (
  <Accordion {...(props.expand ? { activeKey: "0" } : {})}>
    <Card className={`mb-2 p-1 ${styles.card}`} style={style.card}>
      <Card.Body>
        <Row className="pb-1">
          <Col xs="3" lg="2" className="pr-0">
            <div className="mt-1">
              <Card.Title style={style.card}>{props.name}</Card.Title>
            </div>
          </Col>
          <Col xs="3" lg="3">
            <div className={windowInnerWidth < 769 ? "mt-1" : "mt-1 d-flex"}>
              <ToggleOffline enabled={props.offline ? false : true} className="pr-3" />
              {!props.offline ? null : <OfflineDayDropdown />}
            </div>
          </Col>
          <Col xs="3" lg="4">
            <div className="d-flex">
              <span className={styles.divider} />
              <Nav.Link className="py-0">
                <Link to={"/menu-management/" + props.value} className={styles.link}>
                  <MenuManagement width="30" height="30" fill="#4A4A4A" className="pr-2" />
                  Manage Menu
                </Link>
              </Nav.Link>
            </div>
          </Col>
          <Col xs="3">
            <Accordion.Toggle as={Nav.Link} variant="link" eventKey="0" className={`py-0 ${styles.toggle}`}>
              <span className={styles.toggle}>
                ({props.thirdParties.length ? props.thirdParties.length : "0"}) Third Parties
              </span>
              <span className={styles.thirdPartiesOffline}> ({}) Offline</span>
              <ChevronDown width="15" />
            </Accordion.Toggle>
          </Col>
        </Row>
      </Card.Body>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <div className="divider mb-3" />
          <Row>
            {props.thirdParties.map(thirdParty => {
              return (
                <Col xs="6" lg="3">
                  <div className="d-flex">
                    <p className="pr-2">{thirdParty.name}</p>
                    <ToggleOffline enabled={thirdParty.offline ? false : true} className="pr-3" />
                    {!thirdParty.offline ? null : <OfflineDayDropdown />}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default LocationCard;

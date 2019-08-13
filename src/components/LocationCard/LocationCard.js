import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Nav } from "react-bootstrap";
import ToggleOffline from "../../components/ToggleOffline";
import { MenuManagement, ChevronDown } from "../Icons";

const style = {
  color: "red"
};

const LocationCard = props => (
  <Accordion>
    <Card className="mb-2">
      <Card.Body>
        <Row className="pb-1">
          <Col xs="6">
            <div className="d-flex mt-1">
              <Card.Title className="pr-4">{props.name}</Card.Title>
              <div className="mt-1">
                <ToggleOffline enabled={props.offline ? false : true} className="pr-2" />
              </div>
            </div>
          </Col>
          <Col xs="3">
            <Nav.Link>
              <Link to="/menu-management">
                <MenuManagement width="20" height="20" className="pr-1" />
                Manage Menu
              </Link>
            </Nav.Link>
          </Col>
          <Col xs="3">
            <Accordion.Toggle as={Nav.Link} variant="link" eventKey="0">
              ({props.thirdParties.length}) Third Parties <span style={style}>( ) Offline</span>{" "}
              <ChevronDown width="15" />
            </Accordion.Toggle>
          </Col>
        </Row>
      </Card.Body>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Row>
            {props.thirdParties.map(thirdParty => {
              return (
                <Col xs="3">
                  <div className="d-flex">
                    <p className="pr-2">{thirdParty.name}</p>
                    <ToggleOffline enabled={thirdParty.offline ? false : true} className="pr-2" />
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

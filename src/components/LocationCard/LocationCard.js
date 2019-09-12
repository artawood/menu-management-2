import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Nav } from "react-bootstrap";
import ToggleOffline from "../Togglers/ToggleOffline";
import { MenuManagement, ChevronDown, Clock } from "../Icons";
import OfflineDayDropdown from "../OfflineDayDropdown";
import NotLiveOverlay from "../NotLiveOverlay";
import styles from "./LocationCard.module.css";

const style = {
  card: {
    fontSize: "16px",
    overflow: "visible"
  },
  thirdPartyRow: {
    paddingLeft: "15px"
  }
};

//var for adjusting responsive with conditional rendering
const windowInnerWidth = window.innerWidth;

class LocationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandOne: false
    };
  }

  toggleExpandOne() {
    return this.state.expandOne ? this.setState({ expandOne: false }) : this.setState({ expandOne: true });
  }

  render() {
    return (
      <Accordion {...(this.props.expandAll ? { activeKey: "0" } : {})}>
        <Card className={`mb-2 p-1 ${styles.card}`} style={style.card}>
          {this.props.live ? <NotLiveOverlay /> : null}
          <Card.Body>
            <Row className="pb-1">
              <Col xs="3" lg="2" className="pr-0">
                <div className="mt-1">
                  <Card.Title style={style.card}>{this.props.name}</Card.Title>
                </div>
              </Col>
              <Col xs="3" lg="3">
                <div className={windowInnerWidth < 769 ? "mt-1" : "mt-1 d-flex"}>
                  <ToggleOffline enabled={this.props.offline ? false : true} className="pr-3" />
                  {!this.props.offline ? null : <OfflineDayDropdown />}
                </div>
              </Col>
              <Col xs="3" lg="4">
                <div className="d-flex">
                  <span className={styles.divider} />
                  <div className="pl-3 d-flex">
                    <div>
                      <MenuManagement width="28" height="28" fill="#4A4A4A" className="pr-2" />
                    </div>
                    <div>
                      <Link to={"/menu-management/" + this.props.value} className={styles.link}>
                        Manage Menu
                      </Link>
                    </div>
                  </div>
                  <div className="pl-3 d-flex">
                    <div>
                      <Clock width="30" height="30" fill="#4A4A4A" className="pr-2" />
                    </div>
                    <div>
                      <Link to={"/hours-management/" + this.props.value} className={styles.link}>
                        Manage hours
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="3">
                <Accordion.Toggle
                  as={Nav.Link}
                  variant="link"
                  eventKey="0"
                  className={`py-0 ${styles.toggle}`}
                  onClick={this.toggleExpandOne.bind(this)}
                >
                  <span className={styles.toggle}>
                    ({this.props.thirdParties.length ? this.props.thirdParties.length : "0"}) Third Parties
                  </span>
                  {/* Dynamically render number 3rd Parties offline */}
                  <span className={styles.thirdPartiesOffline}> ({}) Offline</span>
                  <ChevronDown width="15" className={this.state.expandOne ? styles.rotateUp : styles.rotateDown} />
                </Accordion.Toggle>
              </Col>
            </Row>
          </Card.Body>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="divider mb-3" />
              <Row style={style.thirdPartyRow}>
                {this.props.thirdParties.map(thirdParty => {
                  return (
                    <Col xs="6" lg="4" xl="3" className="px-0" key={thirdParty.name}>
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
  }
}

export default LocationCard;

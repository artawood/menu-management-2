import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Location, MenuManagement } from "../../components/Icons";

class Homepage extends React.Component {
  //state

  render() {
    return (
      <div>
        <Container className="shift-down text-center">
          <div className="pt-5">
            <h1>This is the homepage</h1>
          </div>
          <Container className="pt-5">
            <Row>
              <Col xs="6">
                <Link to="/location-management">
                  <div>
                    <Location width="100" height="100" />
                    <h1>Location Management</h1>
                  </div>
                </Link>
              </Col>
              <Col xs="6">
                <Link to="/menu-creation">
                  <div>
                    <MenuManagement width="100" height="100" />
                    <h1>Menu Creation</h1>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Homepage;

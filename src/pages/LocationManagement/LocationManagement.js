import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import Hero from "../../components/Hero";
import LocationCard from "../../components/LocationCard";
import { Container, Row, Col } from "react-bootstrap";

import data from "../../models/data.js";

class LocationManagement extends React.Component {
  state = data;

  render() {
    return (
      <div className="shift-down">
        <Header />
        <Sidebar sidebar={<SidebarContent />} docked={true}>
          <Container fluid className="pt-4 pl-6">
            <Hero className="pb-5" title="Location Management" />
            <Container fluid />
            <Row>
              <Col xs="2">
                <h2>Location</h2>
              </Col>
              <Col xs="1">
                <h2>Status</h2>
              </Col>
              <Col xs="6" />
              <Col xs="3">
                <h2>Third Parties</h2>
              </Col>
            </Row>
            {this.state.location.map(site => {
              return <LocationCard name={site.text} offline={site.offline} thirdParties={site.thirdParties} />;
            })}
          </Container>
        </Sidebar>
      </div>
    );
  }
}

export default LocationManagement;

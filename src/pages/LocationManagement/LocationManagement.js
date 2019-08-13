import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import Hero from "../../components/Hero";
import LocationCard from "../../components/LocationCard";
import { Menu } from "semantic-ui-react";
import { LocationFilter, StatusFilter, ThirdPartyFilter } from "../../components/Filters";

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
                <LocationFilter />
              </Col>
              <Col xs="2">
                <StatusFilter />
              </Col>
              <Col xs="5" />
              <Col xs="3">
                <ThirdPartyFilter thirdParties={this.state.thirdParties} />
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

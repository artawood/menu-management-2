import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import LocationCard from "../../components/LocationCard";
import LocationSearchBar from "../../components/LocationSearchBar";
import { LocationFilter, StatusFilter, ThirdPartyFilter } from "../../components/Filters";

import data from "../../models/data.js";

class LocationManagement extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpandAll = this.toggleExpandAll.bind(this);
    this.state = {
      location: data.location,
      filterText: "",
      collapseText: "Expand All",
      expand: false,
      sortByOnline: false
    };
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }

  sortByStatus(e, data) {
    console.log(data.value);
  }

  sortByLocation(e, data) {
    console.log(data.value);
    if (data.value === 1) {
      function compare(a, b) {
        const locationA = a.text.toUpperCase();
        const locationB = b.text.toUpperCase();

        let comparison = 0;
        if (locationA && locationB) {
          comparison = 1;
        } else if (locationA > locationB) {
          comparison = -1;
        }
        return comparison;
      }

      const sortedAZ = this.state.location.sort(compare);
      this.setState({ location: sortedAZ });
    }
  }

  toggleExpandAll() {
    return this.state.expand
      ? this.setState({ collapseText: "Expand All", expand: false })
      : this.setState({ collapseText: "Collapse All", expand: true });
  }

  render() {
    return (
      <div>
        <Container fluid className="pl-6 pt-5">
          <Row className="hero-clear">
            <Col md="6" className="">
              <h1>Location Management</h1>
              <LocationSearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
            </Col>
            <Col md="6" />
          </Row>
          <div class="hero-divider py-1" />
          <Container fluid />
          <Row>
            <Col xs="2">
              <LocationFilter sortByLocation={this.sortByLocation} />
            </Col>
            <Col xs="2">
              <StatusFilter sortByStatus={this.sortByStatus} />
            </Col>
            <Col xs="5" />
            <Col xs="3">
              {/* <ThirdPartyFilter thirdParties={this.state.thirdParties} /> */}
              <Nav>
                <Nav.Link onClick={this.toggleExpandAll}>{this.state.collapseText}</Nav.Link>
              </Nav>
            </Col>
          </Row>
          {this.state.location.map(site => {
            if (site.text.toLowerCase().indexOf(this.state.filterText) === -1) {
              return;
            }
            return (
              <LocationCard
                name={site.text}
                offline={site.offline}
                thirdParties={site.thirdParties}
                value={site.value}
                expand={this.state.expand}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default LocationManagement;

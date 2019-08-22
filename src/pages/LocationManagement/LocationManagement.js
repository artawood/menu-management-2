import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ToggleExpandAll from "../../components/ToggleExpandAll";
import LocationCard from "../../components/LocationCard";
import LocationSearchBar from "../../components/LocationSearchBar";
import { LocationFilter, StatusFilter, ActionFilter, ThirdPartyFilter } from "../../components/Filters";
import Setting from "../../components/Setting";

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
      sortByOnline: false,
      sortByLocation: [],
      sortOption: ""
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
      // function compare(a, b) {
      //   const locationA = a.text.toUpperCase();
      //   const locationB = b.text.toUpperCase();

      //   let comparison = 0;
      //   if (locationA && locationB) {
      //     comparison = 1;
      //   } else if (locationA > locationB) {
      //     comparison = -1;
      //   }
      //   return comparison;
      // }

      // const sortedAZ = this.state.location.sort(compare);
      // this.setState({ location: sortedAZ });
      const sortByLocationAZ = [].concat(this.state.location).sort((a, b) => a.text > b.text);
      this.setState({ sortByLocation: sortByLocationAZ, sortOption: data.value });
    }
  }

  toggleExpandAll() {
    return this.state.expand
      ? this.setState({ collapseText: "Expand All", expand: false })
      : this.setState({ collapseText: "Collapse All", expand: true });
  }

  render() {
    return (
      <div className="bg-gray">
        <Container className="pt-5">
          <h1 className="pt-5">Location Management</h1>
          <Row className="pt-4 pb-2">
            <Col lg="4" className="">
              <LocationSearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
            </Col>
            <Col lg="8" />
          </Row>
          <div class="hero-divider py-1" />
          <div className="d-flex align-items-end">
            <div className="ml-auto">
              <table>
                <tr>
                  <td>
                    <ToggleExpandAll toggleExpandAll={this.toggleExpandAll} collapseText={this.state.collapseText} />
                  </td>
                  <td>
                    <Setting className="pl-2" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <Row className="pb-3">
            <Col xs="2">
              <LocationFilter sortByLocation={this.sortByLocation} />
            </Col>
            <Col xs="2">
              <StatusFilter sortByStatus={this.sortByStatus} />
            </Col>
            <Col xs="5">
              <ActionFilter />
            </Col>
            <Col xs="3">
              <ThirdPartyFilter thirdParties={this.state.thirdParties} />
            </Col>
          </Row>
          {this.state.sortOption === "1"
            ? this.state.sortByLocation.map(site => {
                return (
                  <LocationCard
                    name={site.text}
                    offline={site.offline}
                    thirdParties={site.thirdParties}
                    value={site.value}
                    expand={this.state.expand}
                  />
                );
              })
            : this.state.location.map(site => {
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
          {/* {this.state.location.map(site => {
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
          })} */}
        </Container>
      </div>
    );
  }
}

export default LocationManagement;

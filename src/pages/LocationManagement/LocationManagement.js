import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";

class LocationManagement extends React.Component {
  //state

  render() {
    return (
      <div className="shift-down">
        <Header />
        <Sidebar sidebar={<SidebarContent />} docked={true}>
          <Container fluid className="pt-5 pl-6">
            <Hero className="pb-5" title="Location Management" />
          </Container>
        </Sidebar>
      </div>
    );
  }
}

export default LocationManagement;

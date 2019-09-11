import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header2";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import DayCard from "../../components/DayCard";

import data from "../../models/data.js";

//var for adjusting responsive with conditional rendering
const windowInnerWidth = window.innerWidth;
console.log(windowInnerWidth);

class HoursManagement extends React.Component {
  state = data;

  render() {
    const id = this.props.match.params.id;
    console.log(id);
    return (
      <div className="App">
        <Header />
        <Sidebar sidebar={<SidebarContent id={id} />} docked={windowInnerWidth < 769 ? false : true}>
          <Container className="pl-5 pt-5">
            <h2 className="pt-5">Hours Management</h2>
            <div className="hero-divider py-1" />
            <Container className="pt-5">
              {this.state.location[0].deliveryHours.map((delivery, index) => {
                return (
                  <DayCard
                    key={index}
                    day={delivery.day}
                    openTime={delivery.open.time}
                    openMeridiem={delivery.open.meridiem}
                    closeTime={delivery.close.time}
                    closeMeridiem={delivery.close.meridiem}
                    closeAllDay={delivery.closeAllDay}
                  />
                );
              })}
            </Container>
          </Container>
        </Sidebar>
      </div>
    );
  }
}

export default HoursManagement;

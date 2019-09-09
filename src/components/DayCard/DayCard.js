import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HoursDropdown from "../HoursDropdown";
import OpenHourDropdown from "../OpenHourDropdown";
import CloseHourDropdown from "../CloseHourDropdown";
import "./DayCard.css";

class DayCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="mb-2">
        <Card.Body>
          <Row className="px-2 py-3">
            <Col md="2">
              <h3>{this.props.day}</h3>
            </Col>
            <Col md="3">
              <OpenHourDropdown openTime={this.props.openTime} openMeridiem={this.props.openMeridiem} />
            </Col>
            <Col md="3">
              <CloseHourDropdown closeTime={this.props.openTime} closeMeridiem={this.props.closeMeridiem} />
            </Col>
            <Col md="4">
              <label className="close-all-day mt-2">
                Close All Day
                <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default DayCard;

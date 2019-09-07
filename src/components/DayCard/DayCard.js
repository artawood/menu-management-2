import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HoursDropdown from "../HoursDropdown";
import "./DayCard.css";

class DayCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="mb-2">
        <Card.Body>
          <Row>
            <Col xs="3">
              <h3>{this.props.day}</h3>
            </Col>
            <Col xs="3">
              <div className="d-flex">
                Open <HoursDropdown openTime={this.props.openTime}></HoursDropdown>
              </div>
            </Col>
            <Col xs="3">
              <div className="d-flex">
                Close <HoursDropdown></HoursDropdown>
              </div>
            </Col>
            <Col xs="3">
              <label class="close-all-day">
                Close All Day
                <input type="checkbox"></input>
                <span class="checkmark"></span>
              </label>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default DayCard;

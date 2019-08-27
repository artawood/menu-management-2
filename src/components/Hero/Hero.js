import React from "react";
import { Row, Col, Jumbotron, Nav } from "react-bootstrap";
import "./Hero.css";

import data from "../../models/data.json";

const Hero = props => (
  <Jumbotron className="hero-clear">
    <Row>
      <Col md="8" className="">
        <h1>{props.title}</h1>
      </Col>
      <Col md="4" />
    </Row>
    <div className="hero-divider py-1" />
    <Nav activeKey="all" onSelect={selectedKey => alert(`filter ${selectedKey}`)} />
  </Jumbotron>
);

export default Hero;

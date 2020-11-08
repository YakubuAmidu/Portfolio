import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Responsibilities extends Component {
  render() {
    return (
      <Row>
        <Col md={12} className="Responsibilities">
          <i class="fab fa-react"></i>
          <p className="Responsibilities_header">ReactJS</p>
          <p className="Responsibilities_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </Col>
        <Col md={12} className="Responsibilities">
          <i class="fab fa-react"></i>
          <p className="Responsibilities_header">React native</p>
          <p className="Responsibilities_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </Col>
        <Col md={12} className="Responsibilities">
          <i class="fab fa-js"></i>
          <p className="Responsibilities_header">Javascript</p>
          <p className="Responsibilities_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </Col>
        <Col md={12} className="Responsibilities">
          <i class="fab fa-bootstrap"></i>
          <p className="Responsibilities_header">Bootstrap</p>
          <p className="Responsibilities_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </Col>
      </Row>
    );
  }
}

export default Responsibilities;

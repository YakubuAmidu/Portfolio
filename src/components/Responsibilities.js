import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Responsibilities extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>
        <Row>
          <Col md={12} className="Responsibilities">
            <i class="fab fa-react"></i> ReactJS
          </Col>
          <Col md={12} className="Responsibilities">
            <div className="Skills_logo">
              <i class="fab fa-react"></i> React native
            </div>
          </Col>
          <Col md={12} className="Responsibilities">
            <div>
              <i class="fab fa-js"></i> Javascript
            </div>
          </Col>
          <Col md={12} className="Responsibilities">
            <div>
              <i class="fab fa-bootstrap"></i> Bootstrap
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Responsibilities;

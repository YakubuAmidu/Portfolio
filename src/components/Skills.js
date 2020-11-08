import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>
        <Row>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-react"></i> ReactJS
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-react"></i> React native
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js-square"></i> Javascript
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-bootstrap"></i> Bootstrap
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-react"></i> Flex box
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fas fa-file-code"></i> CSS
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js"></i> CSS GRID
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js"></i> Animations
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js"></i> Animations
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js"></i> Animations
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-js"></i> Animations
            </div>
          </Col>
          <Col sm={3}>
            <div className="Skills_logo">
              <i class="fab fa-bootstrap"></i> Responsive
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skills;

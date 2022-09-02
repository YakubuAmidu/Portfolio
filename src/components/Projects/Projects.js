import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import './Projects.scss';

class Project extends Component{
  render(){
    return (
      <Container className="project" fluid>
        <h1 className="project__header">Hightlighted projects</h1>
        <Row>
          <Col lg={6}>
          <div className="gallery">
          <div className="gallery__name">Exciting tour</div>
          <img src={project1} alt="img" className="gallery__image" />
          <a href='https://fantas.netlify.app'>
          <Button variant="success" className="gallery__button">Click me</Button>
          </a>
          </div>
          </Col>
          <Col lg={6}>
          <div className="gallery">
          <div className="gallery__name">Burger builder</div>
          <img src={project2} alt="img" className="gallery__image" />
          <a href="https://sandwitchbuilder.netlify.app/">
          <Button variant="success" className="gallery__button">Click me</Button>
          </a>
          </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
          <div className="gallery">
          <div className="gallery__name">E-commerce</div>
          <img src={project3} alt="img" className="gallery__image" />
          <a href="https://e-commerrce.netlify.app">
          <Button variant="success" className="gallery__button">Click me</Button>
          </a>
          </div>
          </Col>
          <Col lg={6}>
          <div className="gallery">
          <div className="gallery__name">Realtor vision</div>
          <img src={project4} alt="img" className="gallery__image" />
          <a href="https://realtor-vision.netlify.app">
          <Button variant="success" className="gallery__button">Click me</Button>
          </a>
          </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Project;


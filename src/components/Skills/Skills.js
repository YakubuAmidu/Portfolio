import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Skills.scss';

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='skills__highlight'>Hightlighted Skills</h1>
      <Row>
        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i className='fab fa-react'> React</i>
            <p className='skills__para'>
              React.js is an open-source JavaScript library that is used for
              building user interfaces, specifically for single-page
              applications.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i className='fab fa-react'> React native</i>
            <p className='skills__para'>
              React Native is a popular JavaScript-based mobile app framework,
              that allows you to build natively-rendered mobile apps for iOS, and
              Android.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i className='fab fa-js'> Javascript</i>
            <p className='skills__para'>
              JavaScript is a text-based programming language used both on the
              client-side, and server-side that allows you to make web pages
              interactive.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i class='fab fa-bootstrap'> Bootstrap</i>
            <p className='skills__para'>
              Bootstrap is an HTML, CSS, & JS Library that focuses on simplifying
              the development of informative web pages.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i class='fab fa-css3-alt'> Css</i>
            <p className='skills__para'>
              CSS stands for Cascading Style Sheets with an emphasis placed on
              “Style.” While HTML is used to structure a web document (defining
              things like headlines and paragraphs, and many more.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6}>
          <div className='skills__main'>
            <i class='fab fa-sass'> Sass</i>
            <p className='skills__para'>
              Sass (short for syntactically awesome style sheets) is a
              preprocessor scripting language that is interpreted or compiled
              into Cascading Style Sheets (CSS).
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;

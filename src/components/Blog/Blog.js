import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import './Blog.scss';

class Blog extends Component {
  render() {
    return (
      <div className='blog'>
        {/* <h1 className='blog__title'>Hightlighted Blogs</h1> */}

        <Row>
          <Col lg={4} md={4} sm={12}>
            <div className='blog__main'>
              <img src={blog1} alt='img' className='blog__images' />
              <header className='blog__header'>Writing, testing</header>
              <p className='blog__para'>
                Computer programmers work closely with web and software
                developers to write code for new mobile applications or computer
                programs.
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className='blog__main'>
              <img src={blog2} alt='img' className='blog__images' />
              <header className='blog__header'>Code errors</header>
              <p className='blog__para'>
                On a daily basis, computer programmers might assist in
                troubleshooting parts of a website or computer program that are
                not functioning correctly.
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className='blog__main'>
              <img src={blog3} alt='img' className='blog__images' />
              <header className='blog__header'>Cybersecurity</header>
              <p className='blog__para'>
                Computer programmers work in the cybersecurity field, helping to
                identify malicious software and fix software that could be
                vulnerable.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Blog;

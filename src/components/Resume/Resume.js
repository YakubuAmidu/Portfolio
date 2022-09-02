import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import profile2 from '../../assets/profile2.png';
import './Resume.scss';

const Resume = () => {
    return (
        <div className="resume">
            <h1 className='resume__header'>Resume</h1>
            <div className='resume__main'>

                <div className='resume__secondary'>
                <div className='resume__name--left'>Yakubu</div>
                <div className='resume__image'>
                <img src={profile2} alt="img" className='resume__profile2' />
                    <p className='resume__software'>Full-stack Software engineer</p>
                </div>
                <div className='resume__name--right'>Amidu</div>
                </div>

                <Container fluid>
                  <Row>
                      <Col>
                      <div className='resume__summary'>
                        <h2 className='resume__title'>Summary</h2>
                        <p className='resume__para'>             
                         Hey! I work as a software engineer, and I specialize in apps, and web site development. 
                         Developing both sofware have been my passion since I was a child. 
                         As a driven individual with the ability to adapt to any situation, I have grown myself. 
                         I am primarily passionate about developing them to make life better, and I specialize 
                         in creating them for clients. Because of this, I have grown my skills in a full-cycle, 
                         and I am capable of building so much more than just apps and websites for a better result.
                        </p>
                        </div>
                      </Col>
                  </Row>

                  <Row>
                     <Col>
                        <div className='work'>
                        <div className='work_experience--main'>
                        <div className="work__experience">
                        <div className="work__title">Work experience</div>
                        <div className="work__reactnative">App development</div>
                        <div className='work__company'>Startup - Los Angeles, CA</div>
                        <div className='work__date'>01/01/2017 to present</div>
                        </div> 

                        <div className='work__para--1'>
                        <p className='work__para--2'>1. Architects, build and maintain excellent react native application with clean code.</p>
                        <p className='work__para--2'>2. Implement clean, modern, smooth, and transitions that provide an excellent user experience.</p>
                        <p className='work__para--3'>3. Evaluating existing applications and performing updates and modifications.</p>
                        </div>
                        </div>
                        
                        <div className='work_experience--main'>
                        <div className="work__experience">
                        <div className="work__reactjs">Web development</div>
                        <div className='work__company'>Startup - Los Angeles, CA</div>
                        <div className='work__date'>03/01/2017 to present</div>
                        </div> 

                        <div className='work__para--1'>
                        <p className='work__para--2'>1. Develop the latest user-facing features using react.js</p>
                        <p className='work__para--2'>2. Designing a modern highly responsive web-based user interface.</p>
                        <p className='work__para--3'>3. Evaluating existing website and performing updates and modifications.</p>
                        </div>
                        </div>
                        </div>
                        </Col>

                        <Col>
                      <div className='education'>
                        <div className="education__main">
                        <div className="education__title">Education</div>
                        <div className='education__school'>Los Angeles trade tech - Los Angeles, CA</div>
                        <div className='work__date--1'>01/10/2012 - 03/05/2016</div>
                        </div> 
                        </div>

                        <div className='education'>
                        <div className="education__main">
                        <div className='education__school'>Los Angeles city college - Los Angeles, CA</div>
                        <div className='work__date--1'>04/10/2016 - 05/10/2018</div>
                        </div> 
                        </div>

                        <div className='mainskills'>
                            <p className='mainskills__skills'>Skills</p>
                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Reactjs</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 reactjs'>85%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>React native</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 reactnative'>80%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Sass</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 sass'>85%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Bootstrap</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 bootstrap'>80%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>html</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 html'>85%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Flexbox</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 flexbox'>80%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Css</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 css'>80%</div>
                             </div>
                            </div>

                            <div className='mainskills__container'>
                             <p className='mainskills__header'>Grid</p>
                             <div className="mainskills__html">
                             <div className='mainskills-1 grid'>80%</div>
                             </div>
                            </div>
                        </div>
                     </Col>
                  </Row>

                  <Row>
                      <Col>
                        <div className='socialicons'>
                            <div className='socialicons__main'>
                            <span>
                            Github
                            </span>

                            <span>
                            Facebook
                            </span>

                            <span>
                            linkedin
                            </span>

                            <span>
                            instagram
                            </span>

                            <span>
                                Twitter
                            </span>
                            </div>
                        </div>
                      </Col>
                  </Row>
                </Container>
            </div>
        </div>
    );
}

export default Resume;
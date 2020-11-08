import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Yakubu.</p>
        <Title />
        <p>I am React native and ReactJS engineer.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live California, and I code everyday</p>
            <p>My favorite languate is Javascript, and it is awesome.</p>
            <p>
              Besides coding, I also love to work out and live a healthy
              lifstyle.
            </p>
            <Button variant="outline-dark" onClick={this.toggleDisplayBio}>
              Show less
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="outline-dark" onClick={this.toggleDisplayBio}>
              Read more
            </Button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <Row>
          <Col md={4}>
            <div>
              <i class="fas fa-laptop-code"></i>
              <p>Write something here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <i class="fas fa-laptop-code"></i>
              <p>Write something here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <i class="fas fa-laptop-code"></i>
              <p>Write something here</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

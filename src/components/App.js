import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Projects from "./Projects";
import Responsibilities from "./Responsibilities";
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
        <Responsibilities />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

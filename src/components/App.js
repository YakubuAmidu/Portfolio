import React, { Component } from "react";
import "./App.css";
import Title from "./Title";

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
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

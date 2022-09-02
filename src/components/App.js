import React, { Component } from "react";
import Projects from "./Projects/Projects";
import SocialProfiles from "./SocialProfiles/SocialProfiles";
import Header from "./Header/Header";
import Resume from "./Resume/Resume";
import Blog from "./Blog/Blog";
import Skills from "./Skills/Skills";
import "./App.scss";

class App extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Resume />
        {/* <Mapbox /> */}
        <hr />
        <Blog />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

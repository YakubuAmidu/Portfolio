import React from "react";
import PROJECTS from "../data/projects";

const Project = (props) => {
  const { title, image, link, description } = props.project;

  return (
    <div style={{ display: "inline-block", width: 300, margin: 10 }}>
      <p>{title}</p>
      <img src={image} alt="project" style={{ width: 250, height: 250 }} />
      <br />
      <br />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Hightlighted Project</h2>
    <div>
      {PROJECTS.map((PROJECT) => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;

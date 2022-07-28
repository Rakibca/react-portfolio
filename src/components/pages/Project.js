import React from 'react';
import projects from './portfolio.json'

function ProjectSection(props) {
  return (<div className="box">
    <div className="img-container">
      <img src={props.image} alt="icons"/>
    </div>
    <div className="content">
      <ul>
        <li>
          <p className="project-title">{props.name}</p>
        </li>
        <li>
          <div className="project-icons">
            <a href={props.github}><img src="../github-icon.png" alt="gh-icon" width="60px" id="portfolio-icon"/></a>
            <a href={props.deployedLink}><img src="../click-here-icon.png" alt="ch-icon" width="50px" id="portfolio-icon"/></a>
          </div>
        </li>
        <li>
          {props.skills}
        </li>
      </ul>
    </div>
  </div>);
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  return (<> < div > <h1>Projects</h1> < /div>

<Wrapper>
    {
    projects.map((project) => (<ProjectSection key={project.id} name={project.name} image={project.image} github={project.github} deployedLink={project.deployedLink} skills={project.skills}/ >))
} < /Wrapper>
    </ >);
}

export default Projects;

import React from 'react';
import projects from './portfolio.json'

function ProjectSection(props) {
  return (
    <div className="box">
      <div className="img-container">
        <img src={props.image} alt="icons" />
      </div>
      <div className="content">
        <ul>
          <li>
            <a href={props.deployedLink}><p className="project-title"><img src="../deployed-app-icon.jpg" alt="gh-icon" width="60px" id="portfolio-icon" />{props.name}</p></a>
          </li>
          <li>
            <div className="project-icons">
              <a href={props.github}><img src="../github-repo-icon.png" alt="gh-icon" width="180px" id="portfolio-icon" /></a>
            </div>
          </li>
          <li>
            <p className="project-desc">{props.description}</p>
          </li>
          <li>
            <p className="project-desc">{props.role}</p>
          </li>
          <li>
            <p className="project-desc">{props.technologies}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return (
    <div className="wrapper">{props.children}</div>
  );
}

function Projects() {
  return (<> <div className="projects-container"> <h1>Projects</h1> < /div>

    <Wrapper>
      {
        projects.map((project) => (<ProjectSection key={project.id} name={project.name} image={project.image} github={project.github} deployedLink={project.deployedLink} description={project.description} role={project.role} technologies={project.technologies} />))
      }
      < /Wrapper>
    </>);
}

    export default Projects;

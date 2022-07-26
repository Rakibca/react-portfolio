import React from 'react';
// import projects from src
import projects from './portfolio.json'

function ProjectSection(props) {
  return (<div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <p className="project-title">{props.name}</p>
        </li>
        <li>
          <div className="project-icons">
            <a href={props.github}><img src="" alt="github-icon" id="port-icon"/></a>
            <a href={props.deployedLink}><img src="" alt="app-icon" id="port-icon"/></a>
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
  return (<> < div className = "project" > <h1 className="title">full stack projects</h1>
</div>

<Wrapper>
    {
    projects.map((project) => (<ProjectSection name={project.name} key={project.id} image={project.image} github={project.github} deployedLink={project.deployedLink} skills={project.skills}/>))
  } < /Wrapper>
    </ >);
}

export default Projects;

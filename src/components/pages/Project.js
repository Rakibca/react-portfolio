import React from 'react';
import projects from './portfolio.json'

function ProjectSection(props) {
  return (<div className="box">
    <div className="img-container">
      <img src={props.image}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <p className="project-title">{props.name}</p>
        </li>
        <li>
          <div className="project-icons">
            <a href={props.github}><img src="../github-icon.png" alt="github-icon" width="100px" id="portfolio-icon"/></a>
            <a href={props.deployedLink}><img src="../click-here-icon.png" alt="app-icon" width="110px" id="portfolio-icon"/></a>
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
  return (<> < div className = "project" > <h1 className="title">Projects</h1>
</div>

<Wrapper>
    {
    projects.map((project) => (<ProjectSection name={project.name} key={project.id} image={project.image} github={project.github} deployedLink={project.deployedLink} skills={project.skills}/>))
  } < /Wrapper>
    </ >);
}

export default Projects;

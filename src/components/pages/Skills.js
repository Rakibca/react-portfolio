import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Skills() {
  return (
    <div className="skills-container">
      <Row>
        <Col lg={4} md={12}>
          <h2 className="resume">Front End Proficiencies</h2>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              jQuery
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Handlebars
            </li>
            <li>
              React.Js
            </li>
            <li>
              Redux
            </li>
          </ul>
        </Col>

        <Col lg={4} md={12}>
          <h2 className="resume">Back End Proficiencies</h2>
          <ul>
            <li>
              Node.Js
            </li>
            <li>
              Express.Js
            </li>
            <li>
              ORM
            </li>
            <li>
              MVC
            </li>
            <li>
              MySQL
            </li>
            <li>
              MongoDB
            </li>
            <li>
              Mongoose
            </li>
            <li>
              API (Web, Third-party, RESTful & Server-side)
            </li>
            <li>
              Stripe
            </li>
          </ul>
        </Col>

        <Col lg={4} md={12}>
          <h2 className="resume">DevOps</h2>
          <ul>
            <li>
              Git
            </li>
            <li>
              GitHub
            </li>
            <li>
              GitLab
            </li>
            <li>
              Heroku
            </li>
            <li>
              Cloudinary
            </li>
            <li>
              React Dev Tools
            </li>
            <li>
              Redux Dev Tools
            </li>
            <li>
              Linux
            </li>
            <li>
              SSH
            </li>
            <li>
              Bash
            </li>
          </ul>
        </Col>
      </Row>
    </ div>
  )
};

export default Skills;
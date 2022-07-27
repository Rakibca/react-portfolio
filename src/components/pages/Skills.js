import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Skills() {
  return (<> < div className = "resume-container" > <Row>
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
          React.Js
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
          Handlebars
        </li>
        <li>
          MySQL
        </li>
        <li>
          MongoDB
        </li>
        <li>
          API (Web, Third-party, RESTful & Server-side)
        </li>
      </ul>
    </Col>
  </Row> < /div>
</ >);
}

export default Skills;

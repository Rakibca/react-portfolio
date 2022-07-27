import React from 'react';
import {Col} from 'react-bootstrap';

function About() {
  return (<div>
    <img src="profile-photo.png" alt="profile" className="profile-photo" width="120px"/>
    <div className="row justify-content-center" id="about-container">
      <Col lg={6} md={12}>
        <h1>Rakibul Islam</h1>
        <h2>Full Stack Web Developer</h2>
        <p>
          Experienced IT Professional with one year coding experience seeking an exciting role as a Full Stack Web Developer
          <br></br>
          <br></br>
        </p>
      </Col>
    </div>
  </div>);
}

export default About;

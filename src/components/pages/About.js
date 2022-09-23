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
          Full-stack web developer and an experienced IT professional leveraging 6 years of IT networking background with a bachelor’s degree in Computer Engineering to build a more intuitive user experience on the web. Developed new skills in HTML, JavaScript, CSS, React.js, MERN stack and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development.
          <br></br>
          <br></br>
        </p>
      </Col>
    </div>
  </div>);
}

export default About;

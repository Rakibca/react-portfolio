import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (<div className="contact-icons">
    <Row>
      <Col lg={4} md={12}>
        <a href="https://github.com/Rakibca"><img src="../github-icon.png" width="90px" alt="github-icon" class="icon" /></a>
      </Col>

      <Col lg={4} md={12}>
        <a href="https://www.linkedin.com/in/rakibul007"><img src="../linkedin-icon.png" alt="linkedin-icon" width="90px" class="icon" /></a>
      </Col>

      <Col lg={4} md={12}>
        <a href="https://drive.google.com/file/d/1Q5_E5qDlAtRee2iChXtVLS3wFfclVEQs/view?usp=sharing" download="download" target="_blank" rel="noreferrer"><img src="../resume-icon.png" alt="resume-icon" width="80px" class="icon" /></a>
      </Col>
    </Row>
  </div>);
}

export default Footer;

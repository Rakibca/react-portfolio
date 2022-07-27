import React from 'react';
import {Col} from 'react-bootstrap';

function About() {
  return (<section className="title">

    <div className="row justify-content-center" id="about-container">
      <Col lg={6} md={12}>
        <h1>Rakibul Islam</h1>
        <h2>Full Stack Web Developer</h2>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          <br></br>
          <br></br>
        </p>
      </Col>
    </div>
  </section>);
}

export default About;

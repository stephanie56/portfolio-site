import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ProfileImage from '../images/profile-image.jpeg';


const Intro = () => (
  <Grid className="section">
    <Row>
      <Col xs={12} sm={4} mdOffset={2} md={2}>
        <img className="section__profile-image" src={ ProfileImage }/>
      </Col>
      <Col xs={12} sm={8} md={6}>
        <h1 className="section__title">
            Meet the Developer
        </h1>
        <h2 className="section__subtitle">Your Development Solution in a Box.</h2>
        <div className="section__description">
            Stephanie is a Full Stack Front-end Developer specialised in making elegant websites and web apps that help you connect and engage with your customers.
        </div>
      </Col>
    </Row>
    <Row fluid className="card-list">
      <Col className="card" xs={12} sm={4}>
        <i className="fa fa-codepen"></i>
        <h2>User Experience Design</h2>
        <p>Well-designed apps are just as important as well-built apps.</p>
      </Col>
      <Col className="card" xs={12} sm={4}>
        <i className="fa fa-code"></i>
        <h2>Front End Development</h2>
        <p>2 years experience building responsive websites and web applications using HTML, CSS and Javascript.</p>
      </Col>
      <Col className="card" xs={12} sm={4}>
        <i className="fa fa-rocket"></i>
        <h2>Web Performance</h2>
        <p>Well-designed apps are just as important as well-built apps.</p>
      </Col>
    </Row>
  </Grid>
);

export default Intro;

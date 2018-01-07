import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Intro = () => (
  <Grid className="section">
    <Row>
      <Col xs={12} sm={4} mdOffset={2} md={2}>
        <img className="section__profile-image" />
      </Col>
      <Col xs={12} sm={8} md={6}>
        <h1 className="section__title">
            Meet the Developer
        </h1>
        <h2 className="section__subtitle">Javascript + UX Design</h2>
        <div className="section__description">
            Stephanie is a Full Stack Front-end Developer specialised in making elegant websites and web apps that help you connect and engage with your customers.
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Intro;

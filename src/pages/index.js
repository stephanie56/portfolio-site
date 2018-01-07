import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';

import ProfileImage from '../images/profile-image.jpeg';

const Intro = () => (
  <section className="section">
    <img className="profile-image" />
    <h1 className="section__title">
        Meet the Developer
    </h1>
    <h2 className="section__subtitle">Javascript + UX Design</h2>
    <div className="section__description">
        Stephanie is a Full Stack Front-end Developer specialised in making elegant websites and web apps that help you connect and engage with your customers.
    </div>
  </section>
);

const IndexPage = () => (
  <div className="indexpage">
    <Hero />
    <Intro />
  </div>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';

import ProfileImage from '../images/profile-image.jpeg';

const IndexPage = () => (
  <div className="indexpage">
    <Hero />
    <section className="intro">
      <div className="intro__description">
        Hi there! The name is Stephanie. I'm a Web Designer who also has extensive experience in graphic design, video editing and content marketing. I'm passionate about user experience design, community building and the psychological impact of product design.
      </div>
      <img className="intro__profile-image" src={ ProfileImage } />
    </section>
  </div>
)

export default IndexPage

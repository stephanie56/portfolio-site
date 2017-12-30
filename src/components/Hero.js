import React from 'react'
import Link from 'gatsby-link'

const Hero = () => (
  <div>
    <div className="hero">
      <h1 className="hero__title">CODE + IMPACT</h1>
      <h2 className="hero__subtitle">Design is thinking made visible.</h2>
      <div className="hero__cta">
        <Link to="/about/" className="btn"><i className="fa fa-play-circle"></i>Watch Tour Video</Link>
        <Link to="/contact/" className="btn"><i className="fa fa-envelope-o"></i>Get In Touch</Link>
      </div>
    </div>
  </div>
)

export default Hero;

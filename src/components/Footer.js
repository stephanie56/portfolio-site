import React from 'react';
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="clearfix">
    <div className="container">
      <Link className="logo" to="/">[ <span>Impact!</span> media ]</Link>
      <div className="copyright">© 2018 Coded with love by Stephanie Zeng</div>
      <div className="icon-group">
        <a className="icon-group__item" href="https://www.twitter.com/"><i className="fa fa-github"></i></a>
        <a className="icon-group__item" href="https://www.twitter.com/"><i className="fa fa-codepen"></i></a>
        <a className="icon-group__item" href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
        <a className="icon-group__item" href="https://www.twitter.com/"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>
  </footer>
)

export default Footer;

import React, { Component } from 'react';
import Link from 'gatsby-link';

import { slide as Menu } from 'react-burger-menu';


const BurgerMenu = () => (
  <Menu right className="menu">
    <Link className="menu-item" to="/about/">About</Link>
    <Link className="menu-item" to="/portfolio/">Portfolio</Link>
    <Link className="menu-item" to="/contact/">Contact</Link>
  </Menu>
);

const FullMenu = () => (
  <nav className="header__navbar">
      <Link className="item" to="/about/">About</Link>
      <Link className="item" to="/portfolio/">Portfolio</Link>
      <Link className="item" to="/contact/">Contact</Link>
  </nav>
);

class Header extends Component {

  render(){
    return (
      <header className="header">
          <Link className="header__logo" to="/">[ <span>Impact!</span> media ]</Link>
          <FullMenu />
      </header>
    );
  }
}

export default Header;

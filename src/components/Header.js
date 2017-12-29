import React, { Component } from 'react';
import Link from 'gatsby-link';

import { slide as Menu } from 'react-burger-menu';

class Header extends Component {

  render(){

    return (
      <header className="header">
          <Link className="header__logo" to="/">Impact! Media</Link>
          <nav className="header__navbar">
            <Menu right className="menu">
              <Link className="menu-item" to="/about/">About</Link>
              <Link className="menu-item" to="/portfolio/">Portfolio</Link>
              <Link className="menu-item" to="/contact/">Contact</Link>
            </Menu>
          </nav>
      </header>
    );
  }
}

export default Header;

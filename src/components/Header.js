import React from 'react';
import logo from '../../src/images/Logo.png';
import Navbar from './Navbar.js';

function Header({
      goForm,
      goPreview,
}) {
      
      return (
            (<header className="header">
                  <a href="/" target="_self">
                        <img src={logo} className="header__logo" alt="логотип Alef" />
                  </a>
                  <Navbar goForm={goForm} goPreview={goPreview} />
            </header>)
      );
}
export default Header;
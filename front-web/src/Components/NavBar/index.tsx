import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NavBar() {
  return (
    <nav className="main-navbar">
      <a href="/">
        <img src={logoImg} alt="Logo DS Delivery"/>
        <p className="logo-text">DS Delivery</p>
      </a>
    </nav>
  )
}

export default NavBar;

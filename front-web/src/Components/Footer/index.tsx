import React from 'react';

import './styles.css';

import { ReactComponent as Youtube } from '../../assets/youtube.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';


function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante o evento <b>Semana DevSuperior</b>
      <div className="footer-icons">
        <a href="/">
          <Youtube />
        </a>
        <a href="/">
          <Instagram />
        </a>
        <a href="/">
          <Linkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer;

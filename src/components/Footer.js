// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="container-fluid padb20">
      <div className="row margin0">
        <div className="text">
          <a href="https://siesgst.edu.in">© 2024 SIES Graduate School Of Technology. All Rights Reserved</a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/SIESGSTNerul/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/school/sies-graduate-school-of-technology"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/siesgstevents/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default Footer;

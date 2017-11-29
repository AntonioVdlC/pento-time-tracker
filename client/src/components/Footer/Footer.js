import React from 'react';

import './Footer.css';

const Footer = ({ children }) => (
  <footer className="footer">
    <div className="footer-content">{children}</div>
  </footer>
);

export default Footer;

import React from 'react';

import './Header.css';

const Header = ({ children }) => (
  <header className="header">
    <div className="header-content">{children}</div>
  </header>
);

export default Header;

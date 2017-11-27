import React from 'react';

import './Button.css';

const Button = ({ children, className, onClick }) => (
  <button className={`button ${className || ''}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;

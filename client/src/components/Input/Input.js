import React from 'react';

import './Input.css';

const Input = ({ label, className, type, placeholder, value, onChange }) => (
  <label className="input-wrapper">
    <span className="input-label">{label}</span>
    <input
      className={`input ${className || ''}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Input;

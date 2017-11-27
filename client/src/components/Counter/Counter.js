import React from 'react';

import formatCounter from '../../utils/format-counter';

import './Counter.css';

const Counter = ({ value }) => (
  <span className="counter">{formatCounter(value)}</span>
);

export default Counter;

import React from 'react';

import './Whisper.css';

const Whisper = ({ display, type, text }) =>
  display ? <p className={`whisper ${type}`}>{text}</p> : null;

export default Whisper;

import React from 'react';
import ReactDOM from 'react-dom';

import Whisper from './Whisper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Whisper />, div);
});

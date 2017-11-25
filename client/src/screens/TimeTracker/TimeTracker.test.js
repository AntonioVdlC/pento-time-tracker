import React from 'react';
import ReactDOM from 'react-dom';

import TimeTracker from './TimeTracker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeTracker />, div);
});

import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter value={12} />, div);
});

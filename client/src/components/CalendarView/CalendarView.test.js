import React from 'react';
import ReactDOM from 'react-dom';

import CalendarView from './CalendarView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarView />, div);
});

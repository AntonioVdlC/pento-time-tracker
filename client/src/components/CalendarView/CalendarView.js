import React from 'react';

import './CalendarView.css';

const CalendarView = ({ sessions }) => (
  <div>
    {sessions && sessions.length ? (
      <ul>
        {sessions.map((session, index) => (
          <li key={`session-${index}`}>
            <p>{session.name}</p>
            <p>{session.start}</p>
            <p>{session.stop}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No sessions registered yet, please track a session first!</p>
    )}
  </div>
);

export default CalendarView;

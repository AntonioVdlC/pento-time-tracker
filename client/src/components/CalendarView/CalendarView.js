import React from 'react';
import BigCalender from 'react-big-calendar';

import moment from 'moment';

import './CalendarView.css';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

BigCalender.momentLocalizer(moment);

const CalendarView = ({ sessions }) => (
  <div>
    {sessions && sessions.length ? (
      <BigCalender
        defaultDate={new Date(Date.now())}
        defaultView={'day'}
        views={['month', 'week', 'day', 'agenda']}
        events={sessions.map(session => ({
          title: session.name,
          start: new Date(session.start),
          end: new Date(session.stop)
        }))}
      />
    ) : (
      <p>No sessions registered yet, please track a session first!</p>
    )}
  </div>
);

export default CalendarView;

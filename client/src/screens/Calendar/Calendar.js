import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Calendar.css';

class Calendar extends Component {
  state = {};
  render = () => {
    return (
      <div className="calendar">
        Calendar<div className="time-tracker-footer">
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  };
}

export default Calendar;

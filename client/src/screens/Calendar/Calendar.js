import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Calendar.css';

class Calendar extends Component {
  state = {
    loading: true
  };

  componentDidMount = async () => {
    const { store } = this.props;

    try {
      let sessions = await store.get('sessions');
      this.setState(prev => ({ ...prev, sessions }));
    } catch (err) {
      this.setState(prev => ({ ...prev, error: true }));
    } finally {
      this.setState(prev => ({ ...prev, loading: false }));
    }
  };

  render = () => {
    const { loading, error, sessions } = this.state;
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div className="calendar">
        {error ? <p>Oops, an error occured ... Please try again!</p> : null}
        Calendar
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
        <div className="time-tracker-footer">
          <Link to="/">Track a session</Link>
        </div>
      </div>
    );
  };
}

export default Calendar;

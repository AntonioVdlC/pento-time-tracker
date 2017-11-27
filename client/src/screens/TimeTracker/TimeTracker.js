import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import formatCounter from '../../utils/format-counter';

import './TimeTracker.css';

class TimeTracker extends Component {
  state = {
    name: '',
    start: null,
    counter: 0, // in seconds
    interval: null
  };

  startTimer = () => {
    const start = new Date(Date.now()).toISOString();

    const interval = setInterval(() => {
      this.setState(prev => ({ ...prev, counter: prev.counter + 1 }));
    }, 1000 /* 1 second */);

    this.setState(prev => ({ ...prev, start, interval }));
  };

  stopTimer = () => {
    const { start, interval, name } = this.state;
    const { store } = this.props;

    const stop = new Date(Date.now()).toISOString();

    clearInterval(interval);

    store
      .put('sessions', { name: name || 'No Name', start, stop })
      .catch(err => {
        this.setState(prev => ({ ...prev, error: true }));
      });

    this.setState(prev => ({ ...prev, counter: 0, start: null, name: '' }));
  };

  render = () => {
    const { name, counter, start, error } = this.state;

    return (
      <div className="time-tracker">
        {error ? <p>Oops, an error occured ... Please try again!</p> : null}
        <div className="time-tracker-name">
          <label className="time-tracker-name-input-wrapper">
            <span className="time-tracker-name-input-label">
              {'Give a name to your time tracking session:'}
            </span>
            <input
              className="time-tracker-name-input"
              type="text"
              placeholder="Ex.: Doing important stuff"
              value={name}
              onChange={e => {
                const { value } = e.target;
                this.setState(prev => ({ ...prev, name: value }));
              }}
            />
          </label>
        </div>

        <div className="time-tracker-counter">{formatCounter(counter)}</div>

        <div className="time-tracker-button">
          {start === null ? (
            <button onClick={this.startTimer}>Start</button>
          ) : (
            <button onClick={this.stopTimer}>Stop</button>
          )}
        </div>

        <div className="time-tracker-footer">
          <Link to="/calendar">View Calendar</Link>
        </div>
      </div>
    );
  };
}

export default TimeTracker;

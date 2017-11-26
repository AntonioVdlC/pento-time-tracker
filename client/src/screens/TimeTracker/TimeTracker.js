import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import formatCounter from '../../utils/format-counter';

import './TimeTracker.css';

class TimeTracker extends Component {
  state = {
    name: '',
    start: null,
    stop: null,
    counter: 0, // in seconds
    interval: null
  };
  render = () => {
    const { name, start, stop, counter, interval } = this.state;
    const { store } = this.props;

    return (
      <div className="time-tracker">
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
          <button
            onClick={() => {
              let start = new Date(Date.now()).toISOString();
              let interval = setInterval(() => {
                this.setState(prev => ({ ...prev, counter: prev.counter + 1 }));
              }, 1000 /* 1 second */);
              this.setState(prev => ({ ...prev, start, interval }));
            }}
          >
            Start
          </button>

          <button
            onClick={() => {
              let stop = new Date(Date.now()).toISOString();
              clearInterval(interval);
              this.setState(prev => ({ ...prev, stop, counter: 0 }));
              store.put('sessions', { name: name || 'No Name', start, stop });
              alert(`Session ${name || 'No Name'} saved!`);
            }}
          >
            Stop
          </button>
        </div>

        <div className="time-tracker-footer">
          <Link to="/calendar">View Calendar</Link>
        </div>
      </div>
    );
  };
}

export default TimeTracker;

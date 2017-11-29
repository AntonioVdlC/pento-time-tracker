import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Counter from '../../components/Counter';
import Input from '../../components/Input';
import Whisper from '../../components/Whisper';

import './TimeTracker.css';

class TimeTracker extends Component {
  state = {
    name: '',
    start: null,
    counter: 0, // in seconds
    interval: null
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState(prev => ({ ...prev, name: value }));
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
        <Whisper
          display={error}
          type="error"
          text="Oops, seems like something went wrong ... Please try again!"
        />
        <div className="time-tracker-name">
          <Input
            type="text"
            label="Give a name to your time tracking session:"
            placeholder="Ex.: Doing important stuff"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="time-tracker-counter">
          <Counter value={counter} />
        </div>

        <div className="time-tracker-button">
          {start === null ? (
            <Button className="time-tracker-start" onClick={this.startTimer}>
              Start
            </Button>
          ) : (
            <Button className="time-tracker-stop" onClick={this.stopTimer}>
              Stop
            </Button>
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

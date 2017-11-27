import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CalendarView from '../../components/CalendarView';
import Loading from '../../components/Loading';
import Whisper from '../../components/Whisper';

import './Calendar.css';

class Calendar extends Component {
  state = {
    loading: true
  };

  componentDidMount = async () => {
    const { store } = this.props;

    window.scrollTo(0, 0);

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
      <Loading />
    ) : (
      <div className="calendar">
        <Whisper
          display={error}
          type="error"
          text="Oops, seems like something went wrong ... Please try again!"
        />

        <CalendarView sessions={sessions} />

        <div className="time-tracker-footer">
          <Link to="/">Track a session</Link>
        </div>
      </div>
    );
  };
}

export default Calendar;

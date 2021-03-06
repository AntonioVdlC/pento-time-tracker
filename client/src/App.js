import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Calendar from './screens/Calendar';
import TimeTracker from './screens/TimeTracker';

import './App.css';

class App extends Component {
  render = () => {
    const { store } = this.props;

    return (
      <Router>
        <div className="app">
          <Header>Pento Time Tracker</Header>
          <Main>
            <Route
              exact
              path="/"
              render={props => <TimeTracker {...props} store={store} />}
            />
            <Route
              path="/calendar"
              render={props => <Calendar {...props} store={store} />}
            />
          </Main>
          <Footer>
            Made with{' '}
            <span role="img" aria-label="love">
              ♥️
            </span>{' '}
            by Antonio Villagra De La Cruz
          </Footer>
        </div>
      </Router>
    );
  };
}

export default App;

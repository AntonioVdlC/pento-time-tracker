import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import Calendar from './screens/Calendar'
import TimeTracker from './screens/TimeTracker'

import './App.css';

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className="app">
          <Header>Time Tracker Pentotonic</Header>
          <Main>
            <Route
              exact
              path="/"
              render={props => (
                <TimeTracker {...props} store={store} />
              )}
            />
            <Route
              path="/calendar"
              render={props => (
                <Calendar {...props} store={store} />
              )}
            />
          </Main>
          <Footer>Made with ♥️ by Antonio Villagra De La Cruz</Footer>
        </div>
      </Router>
    );
  }
}

export default App;

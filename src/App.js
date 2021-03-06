import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
      </div>
    );
  }
}

export default connect()(App);

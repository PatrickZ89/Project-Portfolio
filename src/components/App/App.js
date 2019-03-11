import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPage from '../ProjectPage/ProjectPage'
import AdminPage from '../AdminPage/AdminPage'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Link to="/projects">Current Projects</Link>
          </Router>
        </div>
        <Router>
          <Link to="/admin">Admin Page</Link>
        </Router>
        <div className="App-header">
          <h1>Patrick Zarkha</h1>
          <img src='images/goat_small.jpg' className="image" alt="broken" />
          <Router>
            <div>
              <Route path="/projects" component={ProjectPage} />
              <Route path="/admin" component={AdminPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);

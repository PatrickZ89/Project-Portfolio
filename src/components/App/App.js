import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectPage from '../ProjectPage/ProjectPage'
import AdminPage from '../AdminPage/AdminPage'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       <div className="App-header">
        <h1>Patrick Zarkha</h1>
        <img src='images/goat_small.jpg' className="image" alt="broken" />
      </div>
        <ProjectPage />
        <AdminPage />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);

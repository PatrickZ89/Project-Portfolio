import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectPage extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects() {
        this.props.dispatch({ type: 'FETCH_PROJECTS' })
    }


  render() {
    return (
        <>
      <div className="App-header">
        <h1>Patrick Zarkha</h1>
      </div>
      <div>
      <p>{JSON.stringify(this.props.reduxState.plantList)}</p>
      </div>
      </>
    );
  }
}


const mapReduxStateToProps = reduxState => ({
  reduxState
});


export default connect(mapReduxStateToProps)(ProjectPage);
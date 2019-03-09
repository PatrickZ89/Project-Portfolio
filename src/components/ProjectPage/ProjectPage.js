import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../ProjectCard/ProjectCard'

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
      {this.props.reduxState.projects.map((project) => {
                    return (
                        <>
                            <ProjectCard 
                            key={project.id}
                            project={project}
                             />
                        </>
                    );
                })}
      </div>
      </>
    );
  }
}


const mapReduxStateToProps = reduxState => ({
  reduxState
});


export default connect(mapReduxStateToProps)(ProjectPage);
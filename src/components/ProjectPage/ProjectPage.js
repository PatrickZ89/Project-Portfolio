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
      <div className="flex-container">
      {this.props.reduxState.projects.map((project) => {
                    return (
                        <>
                            <ProjectCard 
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
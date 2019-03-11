import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ProjectPage from '../ProjectPage/ProjectPage'

class AdminPage extends Component {
    state = {
        newProject: {
            id: 3,
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: '',
        }
    }

    // componentDidMount() {
    //     this.getProjects();
    // }

    // getProjects() {
    //     this.props.dispatch({ type: 'FETCH_PROJECTS' })
    // }

    handleNameChange = (property) => event => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                [property]: event.target.value,
            }
        });
    }

    addnewProject = event => {
        console.log('Adding Project:', this.state.newProject);
        
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state.newProject })
        this.setState({
            newProject: {
                id: this.state.newProject.id + 1,
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Admin</h3>
                <form onSubmit={this.addnewProject} id="formId">
                    <input type='text' placeholder="Name" value={this.state.newProject.name} onChange={this.handleNameChange('name')} />
                    <input type='text' placeholder="Description" value={this.state.newProject.description} onChange={this.handleNameChange('description')} />
                    <input type='text' placeholder="Thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleNameChange('thumbnail')} />
                    <input type='url' placeholder="Website" value={this.state.newProject.website} onChange={this.handleNameChange('website')} />
                    <input type='url' placeholder="Github" value={this.state.newProject.github} onChange={this.handleNameChange('github')} />
                    <input type='date' placeholder="Date Completed" value={this.state.newProject.date_completed} onChange={this.handleNameChange('date_completed')} />
                    <input type='number' placeholder="Select a Tag" value={this.state.newProject.tag_id} onChange={this.handleNameChange('tag_id')} />

                    <Button type='submit' value='Add New Project' variant="contained" color="primary" > Add New</Button>
                </form>
                <ProjectPage />
            </div>
        );
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(AdminPage);



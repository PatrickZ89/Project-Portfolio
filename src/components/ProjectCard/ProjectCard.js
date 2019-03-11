import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { lightGreen } from '@material-ui/core/colors';

const styles = {
    card: {
      width: 275,
      margin:25,
      color: lightGreen,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      margin: 12,
    },
     
  };
class ProjectCard extends Component {

    deleteProject = (key) => () => {
        console.log('Key:', key);

        this.props.dispatch({ type: 'DELETE_PROJECT', payload: key })
    }

render(){

    const { classes } = this.props;
   console.log(this.props.project);
   
    return (
      <Card className={classes.card} >
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name: {this.props.project.name}
          </Typography>
          <Typography variant="h5" component="h2">
          description: {this.props.project.description}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          <img src={this.props.project.thumbnail} className="image" alt="broken" />
          </Typography>
          <Typography component="p">
          website: {this.props.project.website}
          </Typography>
          <Typography component="p">
          github: {this.props.project.github}
          </Typography>
          <Typography component="p">
          date_completed: {this.props.project.date_completed}
          </Typography>
          <Typography component="p">
          tag_id: {this.props.project.tag_id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.deleteProject(this.props.project.id)}>Delete</Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(connect(mapStateToProps)(ProjectCard));

  
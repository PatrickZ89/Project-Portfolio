import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put as dispatch } from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('POST_PROJECT', postProject)
    yield takeEvery('DELETE_PROJECT', deleteProject)
}

function* fetchProjects() {
    console.log('fetchProjects was hit');
    try {
      const projectResponse = yield axios.get('/api/project');
      yield dispatch({ type: 'SET_PROJECTS', payload: projectResponse.data })
    } catch (error) {
      console.log('this was an error with the fetch- probably your fault');
    }
  }

  function* postProject(action) {
    console.log('postProjects was hit');
    try {
      yield axios.post('/api/project', action.payload );
      yield dispatch({ type: 'FETCH_PROJECTS'});
    } catch (error) {
      console.log('this was an error with the post- probably your fault');
  
    }
  }

  function* deleteProject(action) {
    try {
      console.log('delete function was hit', action)
     
      yield axios({
        method: 'DELETE',
        url: `/api/project/`+action.payload,
      });
      yield dispatch({ type: 'FETCH_PROJECTS' })
    } catch (error) {
      console.log('Error with Delete:', error)
    }
  }
  


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            state= action.payload
            return state;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

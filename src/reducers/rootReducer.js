import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import contacts from './contacts';
import app from './app';

const rootReducer = combineReducers({
  contacts,
  app,
  routing: routerReducer
});

export default rootReducer;

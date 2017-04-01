import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import contacts from '../reducers/contacts';

const defaultState = {
  contacts
};

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

export const history = syncHistoryWithStore(browserHistory, store);

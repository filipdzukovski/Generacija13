import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../redux/ducks';

export default createStore(reducers, applyMiddleware(thunk, createLogger()));
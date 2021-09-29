import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleware = applyMiddleware(thunk,createLogger());

export default createStore(rootReducer,middleware);
import {combineReducers} from 'redux';
import {usersReducer} from './components/users/duck';
import { commentsReducer } from './components/comments/duck';

export default combineReducers({
    usersReducer,commentsReducer
})
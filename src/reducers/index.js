//root reducer contains all of our reducers

import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer           //calling postReducer as posts
})
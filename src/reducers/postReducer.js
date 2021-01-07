//here it will fetch and evaluate any actions on our post

import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    items: [],     //all posts
    item: {}      //single post
}

//reducer function takes 2 things, initial or previous state and action
//we are getting type and payload from postActions
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';          //THUNK?????
import rootReducer from './reducers'      //getting it from index.js

const initialState = {};

const middleware = [thunk];

//const store = createStore(reducerFunction, preloadedState(initial state), enhancer)
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
    

export default store;
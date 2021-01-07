import React from 'react';
import './App.css';
import { Provider } from 'react-redux';   //glue between react and redux

import Posts from './components/Posts'
import PostForm from './components/PostForm'
import store from './store'

//const store = createStore(reducerFunction, preloadedState(initial state), enhancer)
//const store = createStore(() => [], {}, applyMiddleware());       //in store.js

function App() {

  return (
    //store holds the state
    <Provider store={store}> 
      <div className="App">
        <PostForm /> <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterApp from './Counter';
import './App.css';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_TYPE':
      return {counter: state.counter + 1}
    case 'DECREASE_TYPE':
      return {counter: state.counter - 1}
  }

  return state;
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
};

export default App;

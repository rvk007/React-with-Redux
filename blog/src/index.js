import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxTHUNK from 'redux-thunk'; // ReduxTHUNK is middleware for React

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ReduxTHUNK));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

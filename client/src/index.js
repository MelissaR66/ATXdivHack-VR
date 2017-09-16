import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
const logger = createLogger({ collapsed: true })

import App from './components/app';
import reducers from './reducers';

let middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

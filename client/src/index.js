import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const logger = createLogger({ collapsed: true })

import AppContainer from './containers/App';
import VR from './components/VR'
import TherapistPanel from './components/TherapistPanel'
import Setup from './components/Setup'

import reducers from './reducers';

let middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={VR} />
        <Route path="panel" component={TherapistPanel} />
        <Route path="setup" component={Setup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

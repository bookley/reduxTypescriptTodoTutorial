import * as React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {todos, visibilityFilter}  from './reducers/reducers'

import App from './components/App'
import Login from './components/login'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
require('../scss/theme.scss');


const todoApp = combineReducers({
  visibilityFilter,
  todos,
  routing: routerReducer
})

let store = createStore(todoApp);

//log state changes
console.log(store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//sync history
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Login}/>
      <Route path="/app" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

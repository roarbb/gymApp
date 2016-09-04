import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import configureStore from '../configureStore'

import App from '../components/App'
import Dashboard from '../containers/Dashboard'
import LoginContainer from '../containers/LoginContainer'
import NoMatch from '../components/NoMatch'

const store = configureStore();

const checkAuth = (nextState, replace, callback) => {
  if(!store.getState().user.hash) {
    replace('/login')
  }

  callback()
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Dashboard} onEnter={checkAuth}/>
            <Route path="login" component={LoginContainer}/>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Router>
      </Provider>
    )
  }
}

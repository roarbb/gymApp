import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import configureStore from '../configureStore'

import App from './App'
import NoMatch from '../components/NoMatch'
import Dashboard from './Dashboard'
import LoginContainer from './LoginContainer'
import DetailContainer from './DetailContainer'
import FormContainer from '../containers/FormContainer'

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
            <IndexRoute component={Dashboard} onEnter={checkAuth} />
            <Route path="max/:maxId" component={DetailContainer} onEnter={checkAuth}/>
            <Route path="login" component={LoginContainer} />
            <Route path="add" component={FormContainer} />
            <Route path="edit/:maxId" component={FormContainer} />
          </Route>
          <Route path="*" component={NoMatch} />
        </Router>
      </Provider>
    )
  }
}

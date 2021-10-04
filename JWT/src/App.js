import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import {Profile} from './components/Profile';
import {PrivateRoute} from './hepers/PrivateRoute';

export function App() {
  return (
    <div id="app">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/my-profile' component={Profile} />
        </Switch>
    </div>
  )
}

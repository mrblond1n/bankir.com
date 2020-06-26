import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Events from '../pages/Events'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import * as route from '../../constants/routes';


export default function Main() {
  return (
    <main className="main">
      test
      <Switch>
        <Route to={route.HOME} component={Home} />
        <Route to={route.EVENTS} component={Events} />
        <Route to={route.SIGNIN} component={SignIn} />
        <Route to={route.SIGNUP} component={SignUp} />
      </Switch>
    </main>
  )
}

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
      <Switch>
        <Route exact path={route.HOME} components={Home} />
        <Route path={route.EVENTS} component={Events} />
        <Route path={route.SIGNIN} component={SignIn} />
        <Route path={route.SIGNUP} component={SignUp} />
      </Switch>
    </main>
  )
}

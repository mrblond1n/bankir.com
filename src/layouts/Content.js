import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import CreateEvent from '../pages/CreateEvent'
import EditorEvent from "../pages/EditorEvent";
import Settings from '../pages/Settings'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import * as route from '../constants/routes';
import PrivateRoute from '../functions/PrivateRoute';
import Notify from '../components/Notification'


export default function Main({ classes }) {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <PrivateRoute exact path={route.HOME} component={Home} />
        <PrivateRoute path={route.ADD_EVENT} component={CreateEvent} />
        <PrivateRoute path={route.SETTINGS} component={Settings} />
        <PrivateRoute exact path={route.EVENT_DETAIL} component={EditorEvent} />
        <Route path={route.SIGNIN} component={SignIn} />
        <Route path={route.SIGNUP} component={SignUp} />
      </Switch>
      <Notify />
    </main>
  )
}

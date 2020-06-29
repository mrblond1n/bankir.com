import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import { SIGNIN } from '../../constants/routes'

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const auth = useSelector(state => state.firebase.auth);
  return (<Route {...rest} render={props => auth.uid ? (<Component {...props} />) : (<Redirect to={SIGNIN} />)} />)
}

export default PrivateRoute
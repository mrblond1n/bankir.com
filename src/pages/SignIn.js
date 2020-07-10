import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';
import Section from '../components/UI/Section';
import AuthForm from '../components/Forms/AuthForm'

const INITIAL_STATE = { email: '', password: '' }

export default function SignIn() {
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.authError)
  const auth = useSelector(state => state.firebase.auth)
  if (auth.uid) return <Redirect to={HOME} />;
  const signUser = user => dispatch(signIn({ user }))
  return (
    <Section column>
      <h1 className="title">Авторизация</h1>
      <AuthForm state={INITIAL_STATE} actionWithUser={signUser} />
      <div>{authError}</div>
    </Section>
  )
}

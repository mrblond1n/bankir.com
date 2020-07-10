import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';
import Section from '../components/UI/Section';
import AuthForm from '../components/Forms/AuthForm';

const INITIAL_STATE = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

export default function SignUp() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth)
  const authError = useSelector(state => state.auth.authError);
  if (auth.uid) return <Redirect to={HOME} />
  const signUpUser = user => dispatch(signUp(user))
  return (
    <Section column>
      <h1 className="title">Регистрация</h1>
      <AuthForm state={INITIAL_STATE} actionWithUser={signUpUser} />
      <div>{authError}</div>
    </Section>
  )
}

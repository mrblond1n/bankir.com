import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.authError)
  const auth = useSelector(state => state.firebase.auth)

  if (auth.uid) return <Redirect to={HOME} />;


  const submitForm = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }))
  }

  const disabled = !email || !password;

  return (
    <section className="section">
      <h1 className="title">Sign In</h1>
      <form onSubmit={submitForm} className="form">
        <label htmlFor="email" className="form__label">Email</label>
        <input autoComplete="username" type="email" id="email" className="form__input" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password" className="form__label">Password</label>
        <input autoComplete="new-password" type="password" id="password" className="form__input" onChange={e => setPassword(e.target.value)} />
        <button className="btn" type="submit" disabled={disabled}>Submit</button>
      </form>
      <div>
        {authError}
      </div>
    </section>
  )
}

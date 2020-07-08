import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';

export default function SignUp() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = useSelector(state => state.firebase.auth)
  const authError = useSelector(state => state.auth.authError);

  if (auth.uid) return <Redirect to={HOME} />

  const submitForm = e => {
    e.preventDefault();
    if (confirmPassword !== password) return console.log('wrong password!');
    dispatch(signUp({ email, password, firstName, lastName }));
  }


  const disabled = !email || !password || !confirmPassword || !firstName || !lastName || password !== confirmPassword;

  return (
    <section className="section">
      <h1 className="title">Sign In</h1>
      <form onSubmit={submitForm} className="form">
        <label htmlFor="firstName" className="form__label">First name</label>
        <input type="text" id="firstName" className="form__input" onChange={e => setFirstName(e.target.value)} />
        <label htmlFor="lastName" className="form__label">Last name</label>
        <input type="text" id="lastName" className="form__input" onChange={e => setLastName(e.target.value)} />
        <label htmlFor="email" className="form__label">Email</label>
        <input autoComplete="username" type="email" id="email" className="form__input" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password" className="form__label">Password</label>
        <input autoComplete="new-password" type="password" id="password" className="form__input" onChange={e => setPassword(e.target.value)} />
        <label htmlFor="confirmPassword" className="form__label">Confirm password</label>
        <input autoComplete="new-password" type="password" id="confirmPassword" className="form__input" onChange={e => setConfirmPassword(e.target.value)} />
        <button className="btn" type="submit" disabled={disabled}>Submit</button>
      </form>
      <div>{authError}</div>
    </section>
  )
}

import React, { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = e => {
    e.preventDefault();
    console.log({ email, password })
  }

  const disabled = !email || !password;

  return (
    <section className="section">
      <h1 className="title">Sign In</h1>
      <form onSubmit={submitForm} className="form">
        <label htmlFor="email" className="form__label">Email</label>
        <input type="email" id="email" className="form__input" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password" className="form__label">Password</label>
        <input type="password" id="password" className="form__input" onChange={e => setPassword(e.target.value)} />
        <button className="btn" type="submit" disabled={disabled}>Submit</button>
      </form>
    </section>
  )
}

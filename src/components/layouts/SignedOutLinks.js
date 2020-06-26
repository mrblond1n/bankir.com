import React from 'react';
import { NavLink } from 'react-router-dom';
import { SIGNIN, SIGNUP } from '../constants/routes';

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li className="nav__item">
        <NavLink className="nav__link" to={SIGNUP}>Sign Up</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={SIGNIN}>Log In</NavLink>
      </li>
    </ul>
  )
}
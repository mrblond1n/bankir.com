import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADD_EVENT, HOME, SETTINGS, EVENTS } from '../../constants/routes';
import { signOut } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';

export default function SignedInLinks({ profile }) {
  const dispatch = useDispatch()
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink exact className="nav__link" to={HOME}>{profile.initials}</NavLink>
      </li>
      <li className="nav__item">
        <NavLink exact className="nav__link" to={EVENTS}>Events</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={ADD_EVENT}>New Event</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to={SETTINGS}>Settings</NavLink>
      </li>
      <li className="nav__item" onClick={() => dispatch(signOut())}>
        <button className="nav__link">Log Out</button>
      </li>
    </ul>
  )
}
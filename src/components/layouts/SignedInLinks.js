import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADD_EVENT, HOME, SETTINGS, EVENTS } from '../../constants/routes';

export default function SignedInLinks() {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink exact className="nav__link btn" to={HOME}>NK</NavLink>
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
      <li className="nav__item" onClick={() => { }}>
        <button className="nav__link">Log Out</button>
      </li>
    </ul>
  )
}
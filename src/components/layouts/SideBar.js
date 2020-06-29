import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux';
import Logo from '../Logo';

export default function SideBar() {
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="side-bar">
      <Logo />
      {links}
    </nav>
  )
}

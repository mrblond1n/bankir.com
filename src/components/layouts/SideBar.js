import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export default function SideBar() {
  return (
    <nav className="side-bar">
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  )
}

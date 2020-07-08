import React from 'react'

export default function Button({ dark, children, onHandler, disabled }) {
  const className = dark ? 'btn btn--dark' : 'btn btn--light'
  const type = onHandler ? 'button' : 'submit';
  const action = onHandler ? (e => onHandler(e)) : (() => { })
  return (
    <button onClick={action} className={className} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

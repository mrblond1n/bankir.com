import React from 'react'

export default function ButtonChange({ rotate, onHandler, dark, disabled }) {
  return (
    <button disabled={disabled}>
      <div className="icon icon__arrow" style={rotate && { transform: 'rotate(315deg)' }}></div>
    </button>
  )
}

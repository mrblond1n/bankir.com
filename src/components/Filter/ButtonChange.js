import React from 'react'

export default function ButtonChange({ rotate, onClick }) {
  return (
    <button className="btn btn__icon" onClick={() => onClick()}>
      <div className="icon icon__arrow" style={rotate && { transform: 'rotate(315deg)' }}></div>
    </button>
  )
}

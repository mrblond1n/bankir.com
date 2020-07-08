import React from 'react'
import Button from '../Button'

export default function ButtonChange({ rotate, onHandler, dark, disabled }) {
  return (
    <Button dark={dark} onHandler={onHandler} disabled={disabled}>
      <div className="icon icon__arrow" style={rotate && { transform: 'rotate(315deg)' }}></div>
    </Button>
  )
}

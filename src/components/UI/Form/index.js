import React from 'react'
import './style.scss'

export default function Form(props) {
  let classList = ['form']
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'onSubmit' || key === 'children') return;
    value && classList.push(`${classList[0]}--${key}`)
  });
  return (
    <form className={classList.join(' ')} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

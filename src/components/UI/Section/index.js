import React from 'react'
import './style.scss'

export default function Section(props) {
  let classList = ['section']
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'onSubmit' || key === 'children') return;
    value && classList.push(`${classList[0]}--${key}`)
  });

  return (
    <section className={classList.join(' ')}>
      {props.children}
    </section>
  )
}

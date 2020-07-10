import React from 'react'
import './style.scss'

export default function Section(props) {
  // props.forEach(el => console.log(Object.entries(el)))
  let classList = ['section']
  Object.entries(props).forEach(([key, value]) => {
    value && classList.push(`section__${key}`)
  });

  return (
    <section className={classList.join(' ')}>
      {props.children}
    </section>
  )
}

import React from 'react'

const INITIAL_STATE = [];

export default function Thead({ elems = INITIAL_STATE }) {
  return (
    <thead className='thead'>
      <tr className='table__row'>
        {elems.map(el => <th className='table__item'>{el}</th>)}
      </tr>
    </thead>
  )
}

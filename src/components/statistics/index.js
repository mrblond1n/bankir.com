import React from 'react'
import Balance from './Balance'

const INITIAL_STATE = []

export default function Statistic({ events = INITIAL_STATE }) {

  return (
    <div>
      <Balance events={events} />
    </div>
  )
}

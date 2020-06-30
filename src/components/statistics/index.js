import React from 'react'
import Balance from './Balance'
import StatisticDiagram from './StatisticDiagram'

const INITIAL_STATE = []

export default function Statistic({ events = INITIAL_STATE }) {
  return (
    <div>
      <StatisticDiagram events={events} />
      <Balance events={events} />
    </div>
  )
}

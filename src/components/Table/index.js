import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const INITIAL_STATE = {
  headers: [],
  ceils: [{
    sum: 0,
    tag: '',
    date: '',
    id: ''
  }]
}

export default function Table({ headers = INITIAL_STATE.headers, ceils = INITIAL_STATE.ceils }) {
  return (
    <table className="table">
      <Thead elems={headers} />
      <Tbody elems={ceils} />

    </table>
  )
}

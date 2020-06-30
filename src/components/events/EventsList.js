import React from 'react'
import EventSummary from "./EventSummary";

const INITIAL_STATE = []

export default function EventsList({ events = INITIAL_STATE }) {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="table__row">
          <th className="table__item">Date</th>
          <th className="table__item">Sum</th>
          <th className="table__item">Action</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {events && events.map((event, i) => <EventSummary event={event} key={i} />)}
      </tbody>
    </table>
  )
}

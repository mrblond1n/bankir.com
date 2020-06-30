import React from 'react'
import EventSummary from "./EventSummary";

const INITIAL_STATE = []

export default function EventsList({ events = INITIAL_STATE }) {
  return (
    <div>
      {events && events.map((event, i) => <EventSummary event={event} key={i} />)}
    </div>
  )
}

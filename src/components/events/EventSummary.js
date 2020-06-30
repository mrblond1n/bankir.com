import React from 'react';
import moment from 'moment';


export default function EventSummary({ event }) {
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <span>{event.tag} </span>
          <span>{moment(event.addedAt.toDate()).calendar()}</span>
        </div>
        <span>{event.sum}</span>
        <button onClick={() => console.log(event)}>remove</button>
      </div>
    </div>
  )
}

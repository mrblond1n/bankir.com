import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeEvent } from '../../store/actions/eventActions';


export default function EventSummary({ event }) {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <span>{event.tag} </span>
          <span>{moment(event.addedAt.toDate()).calendar()}</span>
        </div>
        <span>{event.sum}</span>
        <button onClick={() => dispatch(removeEvent(event.id))}>remove</button>
      </div>
    </div>
  )
}

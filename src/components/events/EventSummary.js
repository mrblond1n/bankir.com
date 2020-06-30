import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeEvent } from '../../store/actions/eventActions';
import { useHistory } from 'react-router-dom';


export default function EventSummary({ event }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const className = event.method === 'outcome' ? 'color-wrapper outcome' : 'color-wrapper income';

  return (
    <tr className="table__row" onClick={() => history.push(`event/${event.id}`)}>
      <td className="table__item">
        <span>{event.tag}</span> <br />
        <span>{moment(event.addedAt.toDate()).calendar()}</span>
      </td>
      <td className="table__item">
        <span className={className}>{event.sum}</span>
      </td>
      <td className="table__item">
        <button className="btn" onClick={() => dispatch(removeEvent(event.id))}>remove</button>
      </td>
    </tr>
  )
}

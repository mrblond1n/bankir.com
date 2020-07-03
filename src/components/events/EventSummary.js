import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeEvent } from '../../store/actions/eventActions';
import { useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';


export default function EventSummary({ event }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const className = event.method === 'outcome' ? 'color-wrapper outcome' : 'color-wrapper income';


  const translateTo = e => {
    e.stopPropagation();
    history.push(`event/${event.id}`)
  }
  const removeItem = e => {
    e.stopPropagation();
    dispatch(removeEvent(event.id))
  }

  return (
    <tr className="table__row" onClick={e => translateTo(e)}>
      <td className="table__item">
        <span>{event.tag}</span> <br />
        <span>{moment(event.addedAt.toDate()).calendar()}</span>
      </td>
      <td className="table__item">
        <span className={className}>{event.sum}</span>
      </td>
      <td className="table__item">
        <button className="btn" onClick={e => removeItem(e)}>
          <Icon path={mdiDelete} size={1} />
        </button>
      </td>
    </tr>
  )
}

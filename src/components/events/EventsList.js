import React, { useState } from 'react'
import EventSummary from "./EventSummary";
import Button from '../Button'
import ButtonChange from '../Filter/ButtonChange';

const INITIAL_STATE = []
const showRows = 6;

export default function EventsList({ events = INITIAL_STATE }) {

  const [currentEvents, setCurrentEvents] = useState(0)

  if (!events.length) return <div>No data</div>;

  const visibleEvents = events.slice(currentEvents, currentEvents + showRows);
  const totalPages = Math.ceil((events.length) / 6)
  let arrNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    arrNumbers.push(i)
  }

  const prevEvents = () => setCurrentEvents(currentEvents - showRows)
  const nextEvents = () => setCurrentEvents(currentEvents + showRows)
  const disabled = (right) => right ? currentEvents >= events.length - showRows : currentEvents === 0

  const headers = ['Date', 'Sum', 'Action']

  return (
    <table className="table">
      <thead className="thead">
        <tr className="table__row">
          {headers.map(elem => <th className="table__item">{elem}</th>)}
        </tr>
      </thead>
      <tbody className="tbody">
        {events && visibleEvents.map(event => <EventSummary event={event} key={event.id} />)}
      </tbody>
      <tfoot className='tfoot'>
        <tr className="table__row">
          <td className='table__item'>
            <ButtonChange dark onHandler={prevEvents} disabled={disabled()} />
          </td>
          <td className='table__item'>
            {arrNumbers.map((el, i) =>
              <Button dark onHandler={() =>
                setCurrentEvents(i * showRows)} disabled={currentEvents === i * showRows} key={el}>{el}
              </Button>)}
          </td>
          <td className='table__item'>
            <ButtonChange dark onHandler={nextEvents} disabled={disabled('right')} rotate />
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

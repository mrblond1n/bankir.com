import React, { useEffect, useState } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'

import EventsList from '../components/events/EventsList';
import Statistic from '../components/Statistics';
import { useSelector } from 'react-redux';
import Filter from '../components/Filter';

import moment from 'moment';

export default function Home() {
  const auth = useSelector(state => state.firebase.auth)
  const events = useSelector((state) => state.firestore.ordered.events)
  const date = useSelector(state => state.filter.date);
  const filter = useSelector(state => state.filter.activeFilter)

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    switch (filter.name) {
      case 'month':
        setStartDate(new Date(date.get('year'), date.get('month'), 1))
        setEndDate(new Date(date.get('year'), date.get('month') + 1, 0))
        break;
      case 'months':
        setStartDate(new Date(moment(date).subtract(3, filter.name).format()))
        setEndDate(new Date(moment(date).format()))
        break;
      case 'week':
        setStartDate(new Date(moment(date).subtract(1, filter.name).format()))
        setEndDate(new Date(moment(date).format()))
        break;
      case 'year':
        setStartDate(new Date(date.get('year'), 0, 1))
        setEndDate(new Date(date.get('year'), 11 + 1, 0))
        break;
      case 'all_time':
        setStartDate(new Date(0))
        setEndDate(new Date(3000, 1,))
        break;

      default:
        setStartDate(new Date(date.get('year'), date.get('month'), 1))
        setEndDate(new Date(date.get('year'), date.get('month') + 1, 0))
        break;
    }
  }, [filter, date])

  useFirestoreConnect([{
    collection: 'events',
    orderBy: ['addedAt', 'desc'],
    where: [
      ['authorId', '==', auth.uid],
      ['addedAt', '>=', startDate],
      ['addedAt', '<=', endDate],
    ],
  }
  ])

  return (
    <section className="section">
      <h1>Home</h1>
      <Filter />
      <div className="container">
        <EventsList events={events} />
        <Statistic events={events} />
      </div>
    </section>
  )
}
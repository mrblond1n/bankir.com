import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'

import EventsList from '../components/events/EventsList';
import Statistic from '../components/Statistics';
import { useSelector } from 'react-redux';
import Filter from '../components/Filter';

export default function Home(props) {
  const auth = useSelector(state => state.firebase.auth)
  const events = useSelector((state) => state.firestore.ordered.events)
  const date = useSelector(state => state.filter.date);
  const startDate = new Date(date.startOf('month').format())
  const endDate = new Date(date.endOf('month').format())

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
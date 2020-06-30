import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'

import EventsList from '../components/events/EventsList';
import Statistic from '../components/Statistics';
import { useSelector } from 'react-redux';

export default function Home(props) {
  const auth = useSelector(state => state.firebase.auth)
  const events = useSelector((state) => state.firestore.ordered.events)
  const startDate = new Date('06-01-2020')
  const endDate = new Date('07-01-2020')

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
      <div className="container">
        <EventsList events={events} />
        <Statistic events={events} />
      </div>
    </section>
  )
}
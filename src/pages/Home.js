import React, { useEffect, useState } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'

import EventsList from '../components/EventsList';
import BalanceCard from '../components/BalanceCard';
import Diagram from '../components/Diagram'
import { useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Grid from '@material-ui/core/Grid';

import moment from 'moment';
import Section from '../components/UI/Section';

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
    orderBy: ['date', 'desc'],
    where: [
      ['authorId', '==', auth.uid],
      ['date', '>=', startDate],
      ['date', '<=', endDate],
    ],
  }
  ])
  return (
    <Section container column>
      <h1>Home</h1>
      <Filter />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <EventsList events={events} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Diagram events={events} />
          <BalanceCard events={events} />
        </Grid>
      </Grid>
    </Section>

  )
}
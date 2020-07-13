import React from 'react'
import { useDispatch } from 'react-redux';
import { updateEvent } from '../store/actions/eventActions';
import { useHistory } from 'react-router-dom';
import { HOME } from '../constants/routes';

import EventForm from '../components/Forms/EventForm'

import { Card, CardContent, } from '@material-ui/core';
import Section from '../components/UI/Section';
import { useSelector } from 'react-redux';

const INITIAL_STATE = { sum: '', tag: '', method: 'outcome', date: new Date() }

export default function EditorEvent({ match }) {
  const dispatch = useDispatch();
  const id = match.params.id;
  const events = useSelector(state => state.firestore.data.events);
  const event = events ? { ...events[id], date: events[id].date.toDate() } : INITIAL_STATE

  const history = useHistory();
  const editEvent = event => {
    dispatch(updateEvent(id, event))
    history.push(HOME);
  }

  return (
    <Section column>
      <h1 className="title">Редакитровать платеж</h1>
      <Card>
        <CardContent>
          <EventForm state={event} actionWithEvent={editEvent} />
        </CardContent>
      </Card>
    </Section >
  )
}

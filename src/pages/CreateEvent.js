import React from 'react'
import { useDispatch } from 'react-redux';
import { createEvent } from '../store/actions/eventActions';
import { useHistory } from 'react-router-dom';
import { HOME } from '../constants/routes';

import EventForm from '../components/Forms/EventForm'

import { Card, CardContent, Typography, } from '@material-ui/core';
import Section from '../components/UI/Section';

const INITIAL_STATE = { sum: '', tag: '', method: 'outcome', date: new Date() }

export default function CreateEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const addEvent = event => {
    dispatch(createEvent(event))
    history.push(HOME);
  }
  return (
    <Section column>
      <Typography variant="h3" component="h1" gutterBottom>
        Создание
      </Typography>
      <Card>
        <CardContent>
          <EventForm state={INITIAL_STATE} actionWithEvent={addEvent} />
        </CardContent>
      </Card>
    </Section >
  )
}

import React, { useState, useEffect } from 'react'
import Form from '../UI/Form'
import { KeyboardDatePicker } from '@material-ui/pickers';
import { InputLabel, Select, MenuItem, Button, TextField, Grid } from '@material-ui/core';
import TagField from './TagField'
import moment from 'moment'

export default function EventForm({ state, actionWithEvent }) {
  const [event, setEvent] = useState(state);
  const [disabled, setDisabled] = useState(false)
  const changeEventState = e => setEvent({ ...event, [e.target.id]: e.target.value })
  const setMethodEvent = el => setEvent({ ...event, method: el.name })
  const setDateEvent = date => setEvent({ ...event, date })

  useEffect(() => {
    if (Object.values(event).filter(value => !value).length) return setDisabled(true)
    return setDisabled(false)
  }, [event])
  const submitForm = e => {
    e.preventDefault();
    actionWithEvent({ ...event, date: moment(event.date).toDate() })
  }

  const selectedElems = [
    { name: 'outcome', title: 'Расходы' },
    { name: 'income', title: 'Доходы' }
  ]

  return (
    <Form column onSubmit={submitForm}>
      <Grid direction="column" container>
        <KeyboardDatePicker disableToolbar variant="inline" margin="normal" value={event.date} onChange={setDateEvent} />
        <InputLabel id="method">Тип</InputLabel>
        <Select labelId="method" id="method" value={event.method}>
          {selectedElems.map(el =>
            <MenuItem value={el.name} key={el.name} onClick={() => setMethodEvent(el)}>
              {el.title}
            </MenuItem>
          )}
        </Select>
        <TextField label="Сумма" id="sum" onChange={e => changeEventState(e)} defaultValue={event.sum} />
        <TextField label="Тег" id="tag" onChange={e => changeEventState(e)} defaultValue={event.tag} />
        <TagField />
        <Button type="submit" color='primary' disabled={disabled}>Отправить</Button>
      </Grid>
    </Form>
  )
}

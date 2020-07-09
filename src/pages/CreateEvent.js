import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createEvent } from '../store/actions/eventActions';
import { useHistory } from 'react-router-dom';
import { HOME } from '../constants/routes';

import { InputLabel, Select, MenuItem, Card, Button, CardContent, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default function CreateEvent() {
  const selectedElems = [
    { name: 'outcome', title: 'Расходы' },
    { name: 'income', title: 'Доходы' }
  ]
  const [sum, setSum] = useState('');
  const [method, setMethod] = useState(selectedElems[0]);
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [date, setDate] = useState(new Date());

  const submitForm = e => {
    e.preventDefault();
    dispatch(createEvent({ sum, tag, method: method.name, date }))
    console.log('action!')
    history.push(HOME);
  }

  const disabled = !sum || !method || !tag;

  return (
    <section className="section">
      <h1 className="title">Create Event</h1>
      <Card>
        <CardContent>
          <form className="form" onSubmit={submitForm}>
            <KeyboardDatePicker disableToolbar variant="inline" margin="normal" value={date} onChange={setDate} />
            <InputLabel id="label">Тип</InputLabel>
            <Select labelId="label" id="select" value={method.name}>
              {selectedElems.map(el =>
                <MenuItem value={el.name} key={el.name} onClick={() => setMethod(el)}>
                  {el.title}
                </MenuItem>)}
            </Select>
            <TextField label="Сумма" onChange={e => setSum(e.target.value)} />
            <TextField label="Тег" onChange={e => setTag(e.target.value)} />
            <Button color="primary" type="submit" disabled={disabled}>Отправить</Button>
          </form>
        </CardContent>
      </Card>
    </section >
  )
}

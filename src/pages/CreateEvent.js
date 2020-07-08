import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createEvent } from '../store/actions/eventActions';
import { useHistory } from 'react-router-dom';
import { HOME } from '../constants/routes';
import DatePicker from '../components/datepicker'
import DropDownMenu from '../components/DropDownMenu'
import Button from '../components/Button';

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
    history.push(HOME);
  }

  const disabled = !sum || !method || !tag;



  return (
    <section className="section">
      <h1 className="title">Create Event</h1>
      <form className="form" onSubmit={submitForm}>
        <DatePicker value={date} onChange={setDate} />
        <DropDownMenu elems={selectedElems} active={method} setActive={el => setMethod(el)} light />
        <label htmlFor="sum" className="form__label">Sum</label>
        <input type="text" id="sum" className="form__input form__input--light" onChange={e => setSum(e.target.value)} />
        <label htmlFor="tag" className="form__label">Tag</label>
        <input type="text" id="tag" className="form__input form__input--light" onChange={e => setTag(e.target.value)} />

        {/* <button className="btn" type="submit" disabled={disabled}>Отправить</button> */}
        <Button dark disabled={disabled}>Отправить</Button>
      </form>
    </section>
  )
}

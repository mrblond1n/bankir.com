import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createEvent } from '../store/actions/eventActions';

export default function CreateEvent() {
  const [sum, setSum] = useState('');
  const [method, setMethod] = useState('outcome');
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    dispatch(createEvent({ sum, tag, method }))
  }

  const disabled = !sum || !method || !tag;

  return (
    <section className="section">
      <h1 className="title">Create Event</h1>
      <form onSubmit={submitForm} className="form">
        <select value={method} onChange={e => setMethod(e.target.value)}>
          <option>Outcome</option>
          <option>Income</option>
        </select>
        <label htmlFor="sum" className="form__label">Sum</label>
        <input type="text" id="sum" className="form__input" onChange={e => setSum(e.target.value)} />
        <label htmlFor="tag" className="form__label">Tag</label>
        <input type="text" id="tag" className="form__input" onChange={e => setTag(e.target.value)} />

        <button className="btn" type="submit" disabled={disabled}>Submit</button>
      </form>
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import Form from '../UI/Form'
import { TextField, Button } from '@material-ui/core'

export default function AuthForm({ state, actionWithUser }) {
  const [user, setUser] = useState(state);
  const [disabled, setDisabled] = useState(false)
  const fields = Object.keys(state).map(el => el)

  useEffect(() => {
    if (user.confirmPassword && user.confirmPassword !== user.password) return setDisabled(true);
    if (Object.values(user).filter(value => !value).length) return setDisabled(true)
    return setDisabled(false)
  }, [user])

  const changeUserData = e => setUser({ ...user, [e.target.id]: e.target.value })
  const submitForm = e => {
    e.preventDefault();
    actionWithUser(user)
  }

  const setType = el => {
    switch (el) {
      case 'password':
      case 'confirmPassword':
        return 'password'
      case 'email':
        return 'email'
      default:
        return 'text'
    }
  }

  const setAutoComplete = el => {
    switch (el) {
      case 'email':
        return 'username'
      case 'password':
      case 'confirmPassword':
        return 'new-password'
      default:
        return ''
    }
  }

  const setLabel = el => {
    switch (el) {
      case 'email':
        return 'E-mail'
      case 'password':
        return 'Пароль'
      case 'confirmPassword':
        return 'Повторите пароль'
      case 'firstName':
        return 'Имя'
      case 'lastName':
        return 'Фамилия'
      default:
        return ''
    }
  }

  return (
    <Form column onSubmit={submitForm}>
      {fields.map(el =>
        <TextField key={el} type={setType(el)} autoComplete={setAutoComplete(el)} label={setLabel(el)} id={el} onChange={e => changeUserData(e)} />
      )}
      <Button type="submit" color='primary' disabled={disabled}>Отправить</Button>
    </Form>
  )
}

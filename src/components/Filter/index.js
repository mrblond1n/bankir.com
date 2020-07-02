import React from 'react';
import moment from 'moment'
import 'moment/locale/ru'
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../store/actions/filterActions';
import ChangeMonth from './ButtonChange';
import ButtonSelect from './ButtonSelect';

export default function Filter() {
  moment.locale('ru')
  const date = useSelector(state => state.filter.date)
  const dispatch = useDispatch();

  let increment = () => {
    dispatch(setDate(moment(date).add(1, 'month')))
  }
  let decrement = () => {
    dispatch(setDate(moment(date).subtract(1, 'month')))

  }
  let getMonth = () => {
    const equalYears = moment(date).get('year') === new Date().getFullYear();
    return equalYears ? moment(date).format('MMMM') : moment(date).format('MMMM YYYY')
  }

  return (
    <div className="filter">
      <ChangeMonth onClick={decrement} />
      <ButtonSelect title={getMonth()} />
      <ChangeMonth rotate onClick={increment} />
    </div>
  )
}

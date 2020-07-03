import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment'
import 'moment/locale/ru'
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../store/actions/filterActions';
import ChangeMonth from './ButtonChange';
import ButtonSelect from './ButtonSelect';

export default function Filter() {
  moment.locale('ru');
  const [title, setTitle] = useState();
  const date = useSelector(state => state.filter.date)
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter.activeFilter)
  const selectedFilter = activeFilter.name === 'months' ? 'month' : activeFilter.name;
  const selectedCount = activeFilter.name === 'months' ? 3 : 1;
  const selectAllTime = activeFilter.name === 'all_time'

  let increment = () => {
    dispatch(setDate(moment(date).add(selectedCount, selectedFilter)))
  }
  let decrement = () => {
    dispatch(setDate(moment(date).subtract(selectedCount, selectedFilter)))
  }

  const getMonth = useCallback(() => moment(date).format('MMMM YYYY'), [date])

  const getMonths = useCallback(() =>
    `${moment(date).subtract(selectedCount, selectedFilter).format('MMMM YYYY')} - ${moment(date).format('MMMM YYYY')}`,
    [date, selectedCount, selectedFilter])

  const getWeek = useCallback(() =>
    `${moment(date).subtract(selectedCount, selectedFilter).format('DD.MM.YY')} - ${moment(date).format('DD.MM.YY')}`,
    [date, selectedCount, selectedFilter])

  useEffect(() => {
    switch (activeFilter.name) {
      case 'week':
        setTitle(getWeek())
        break;
      case 'month':
        setTitle(getMonth())
        break;
      case 'months':
        setTitle(getMonths())
        break;
      case 'year':
        setTitle(moment(date).get('year'))
        break;
      default:
        setTitle(activeFilter.title)
        break;
    }
  }, [activeFilter, getMonth, getMonths, date, getWeek])

  return (
    <div className="filter">
      {!selectAllTime && <ChangeMonth onClick={decrement} />}
      <ButtonSelect title={title} />
      {!selectAllTime && <ChangeMonth rotate onClick={increment} />}
    </div>
  )
}

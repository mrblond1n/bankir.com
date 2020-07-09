import React from 'react';
// import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment'
import 'moment/locale/ru'
import { useSelector, useDispatch } from 'react-redux';
import { setDate, setFilter } from '../../store/actions/filterActions';
import { IconButton, Select, MenuItem } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

export default function Filter() {
  moment.locale('ru');
  // const [title, setTitle] = useState('');
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

  // const getMonth = useCallback(() => moment(date).format('MMMM YYYY'), [date])

  // const getMonths = useCallback(() =>
  //   `${moment(date).subtract(selectedCount, selectedFilter).format('MMMM YYYY')} - ${moment(date).format('MMMM YYYY')}`,
  //   [date, selectedCount, selectedFilter])

  // const getWeek = useCallback(() =>
  //   `${moment(date).subtract(selectedCount, selectedFilter).format('DD.MM.YY')} - ${moment(date).format('DD.MM.YY')}`,
  //   [date, selectedCount, selectedFilter])

  // useEffect(() => {
  //   switch (activeFilter.name) {
  //     case 'week':
  //       setTitle(getWeek())
  //       break;
  //     case 'month':
  //       setTitle(getMonth())
  //       break;
  //     case 'months':
  //       setTitle(getMonths())
  //       break;
  //     case 'year':
  //       setTitle(moment(date).get('year'))
  //       break;
  //     default:
  //       setTitle(activeFilter.title)
  //       break;
  //   }
  // }, [activeFilter, getMonth, getMonths, date, getWeek])


  const filterArr = [
    { name: 'week', title: 'Неделя' },
    { name: 'month', title: 'Месяц' },
    { name: 'months', title: 'Три месяца' },
    { name: 'year', title: 'Год' },
    { name: 'all_time', title: 'Всё время' }
  ]

  return (
    <div className="filter">
      {!selectAllTime && <IconButton size="small" onClick={decrement}>
        <Icon path={mdiChevronLeft} size={1} />
      </IconButton>}
      <Select labelId="label" id="select" value={activeFilter.name}>
        {filterArr.map(el =>
          <MenuItem value={el.name} key={el.name} onClick={() => dispatch(setFilter(el))}>
            {el.title}
          </MenuItem>)}
      </Select>
      {/* {title} */}
      {!selectAllTime && <IconButton size="small" onClick={increment}>
        <Icon path={mdiChevronRight} size={1} />
      </IconButton>}
    </div>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../store/actions/filterActions';

import DropDownMenu from '../DropDownMenu'

export default function ButtonSelect({ title }) {
  const filterArr = [
    { name: 'week', title: 'Неделя' },
    { name: 'month', title: 'Месяц' },
    { name: 'months', title: 'Три месяца' },
    { name: 'year', title: 'Год' },
    { name: 'all_time', title: 'Всё время' }
  ]

  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter.activeFilter)
  const changeActiveFitler = elem => dispatch(setFilter(elem));

  return (
    <DropDownMenu title={title} active={activeFilter} setActive={changeActiveFitler} elems={filterArr} dark />
  )
}

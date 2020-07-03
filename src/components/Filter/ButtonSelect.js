import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../store/actions/filterActions';
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'

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
  const showActiveIcon = el => el.name === activeFilter.name && <Icon path={mdiCheck} size={1} />

  return (
    <div className="dropdown">
      <button className="btn">{title}</button>
      <div className="dropdown-content">
        {filterArr.map(el =>
          <div key={el.name} onClick={() => { dispatch(setFilter(el)) }} className='dropdown-item'>
            <span>{el.title}</span>
            {showActiveIcon(el)}
          </div>)}
      </div>
    </div>
  )
}

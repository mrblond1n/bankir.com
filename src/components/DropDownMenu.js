import React from 'react'
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'

export default function ButtonSelect({ title, elems, active, setActive, dark }) {
  const showActiveIcon = el => el.name === active.name && <Icon path={mdiCheck} size={1} />

  const className = dark ? 'btn btn--dark' : 'btn btn--light'
  return (
    <div className="dropdown">
      <button className={className}>{title || active.title}</button>
      <div className="dropdown-content">
        {elems.map(el =>
          <div key={el.name} onClick={() => { setActive(el) }} className='dropdown-item'>
            <span>{el.title}</span>
            {showActiveIcon(el)}
          </div>)}
      </div>
    </div>
  )
}

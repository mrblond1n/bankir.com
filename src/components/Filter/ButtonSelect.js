import React from 'react'
// import DropDownMenu from './DropDownMenu'

export default function ButtonSelect({ title }) {
  return (
    <div class="dropdown">
      <button class="btn">{title}</button>
      <div class="dropdown-content">
        <div>link1</div>
        <div>link2</div>
        <div>link3</div>
      </div>
    </div>
  )
}

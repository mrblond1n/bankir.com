import React from 'react'
import img from '../../assets/logo.svg'
import './index.scss'
import { Link } from 'react-router-dom'
import { HOME } from '../../constants/routes'


export default function Logo() {
  return (
    <Link to={HOME} className="logo">
      <img src={img} alt="logo" width="50" />
      <h1>Bankir.com</h1>
    </Link>
  )
}

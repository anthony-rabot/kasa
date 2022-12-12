import React from 'react'
import logo from '../assets/logo_kasa.svg'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="Logo Kasa" />
    </NavLink>
  )
}

export default Logo

import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({ logo }) => {
  return (
    <NavLink to="/">
      <img className="logo" src={logo} alt="Logo Kasa" />
    </NavLink>
  )
}

export default Logo

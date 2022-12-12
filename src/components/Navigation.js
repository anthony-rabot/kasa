import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="main-menu">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/a-propos">A Propos</NavLink>
    </nav>
  )
}

export default Navigation

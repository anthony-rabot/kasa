import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorMessage = ({ message, texteLien, lien }) => {
  return (
    <section className="error">
      <h1>404</h1>
      <p>{message}</p>
      <NavLink to={lien}>{texteLien}</NavLink>
    </section>
  )
}

export default ErrorMessage

import React from 'react'

const MainTitle = ({ title, location }) => {
  return (
    <div className="accommodation__title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  )
}

export default MainTitle

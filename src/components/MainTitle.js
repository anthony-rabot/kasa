import React from 'react'

const MainTitle = (props) => {
  return (
    <div className="accommodation__title">
      <h1>{props.title}</h1>
      <p>{props.location}</p>
    </div>
  )
}

export default MainTitle

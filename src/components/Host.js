import React from 'react'

const Host = (props) => {
  return (
    <div className="host">
      <div className="host__name">{props.host.name}</div>
      <div className="host__picture">
        <img src={props.host.picture} alt={props.host.name} />
      </div>
    </div>
  )
}

export default Host

import React from 'react'

const Host = ({ host }) => {
  return (
    <div className="host">
      <div className="host__name">{host.name}</div>
      <div className="host__picture">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  )
}

export default Host

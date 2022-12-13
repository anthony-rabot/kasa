import React, { useState } from 'react'
import arrow from '../assets/arrow_up.svg'

const Accordion = ({ type, title, data }) => {
  const [status, setStatus] = useState(0)

  const changeStatus = () => {
    setStatus(status === 0 ? 1 : 0)
  }

  console.log(data)

  return (
    <div className={status === 1 ? 'accordion open' : 'accordion'}>
      <div className="accordion_label" onClick={changeStatus}>
        <h3>{title}</h3>
        <img src={arrow} alt="accordion arrow" />
      </div>
      <div className="accordion_content">
        {type === 'text' ? <p>{data}</p> : <ul>{data}</ul>}
      </div>
    </div>
  )
}

export default Accordion

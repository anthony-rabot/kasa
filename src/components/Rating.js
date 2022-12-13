import React from 'react'
import starActive from '../assets/star_active.png'
import starInactive from '../assets/star_inactive.png'

const Rating = ({ rate }) => {
  let content = []
  let rateValue = parseInt(rate)

  for (let i = 1; i < 6; i++) {
    if (i <= rateValue) {
      content.push(<img key={i} src={starActive} alt="Etoile active" />)
    } else {
      content.push(<img src={starInactive} alt="Etoile inactive" />)
    }
  }

  return <div className="rate">{content}</div>
}

export default Rating

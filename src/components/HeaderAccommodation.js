import React from 'react'
import MainTitle from './MainTitle'
import Host from './Host'
import Rating from './Rating'

const HeaderAccommodation = ({ title, location, host, tags, rating }) => {
  return (
    <header className="accommodation__header">
      <section className="accommodation__infos">
        <MainTitle title={title} location={location} />
        <div className="accommodation__tags">{tags}</div>
      </section>
      <section className="accommodation__host__infos">
        <Rating rate={rating} />
        <Host host={host} />
      </section>
    </header>
  )
}

export default HeaderAccommodation

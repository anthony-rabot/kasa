import React from 'react'

const Hero = ({ text, image }) => {
  return (
    <section className="hero">
      <img src={image} alt="Hero visual" />
      {text !== 'undefined' && <p>{text}</p>}
    </section>
  )
}

export default Hero

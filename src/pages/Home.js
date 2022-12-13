import React from 'react'
import Header from '../components/Header'
import { useFetch } from '../utils/Hooks'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import imageHero from '../assets/bandeau.png'

const Home = () => {
  const { data, isLoading, error } = useFetch(`/logements.json`)
  const logementsList = data ? data : []

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div id="content">
      <div className="container">
        <Header />
        <Hero text="Chez vous, partout et ailleurs" image={imageHero} />
        {isLoading ? (
          <Loader />
        ) : (
          <section className="logements">
            {logementsList?.map((logement) => (
              <Link to={`/appartement/${logement.id}`} key={`${logement.id}`}>
                <Card title={logement.title} picture={logement.cover} />
              </Link>
            ))}
          </section>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../components/Header'
import { useFetch } from '../utils/Hooks'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const Home = () => {
  const { data, isLoading, error } = useFetch(`/logements.json`)
  const logementsList = data ? data : []

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div className="container">
      <Header />
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
  )
}

export default Home

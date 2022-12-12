import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/Hooks'

function Accommodation () {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`/logements.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  const accommodationsList = data ? data : []
  let accommodationData = {}
  if (!isLoading) {
    accommodationData = accommodationsList.find(x => x.id === id)
  }

  console.log(accommodationData)

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <section className="logement">
          <h1>{accommodationData.title}</h1>
          <p>{accommodationData.id}</p>
        </section>
      )}
    </div>
  )
}

export default Accommodation

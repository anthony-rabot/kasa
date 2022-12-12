import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/Hooks'
import Loader from '../components/Loader'
import MainTitle from '../components/MainTitle'
import Host from '../components/Host'
import Tag from '../components/Tag'

function Accommodation() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`/logements.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  const accommodationsList = data ? data : []
  let accommodationData = {}
  let tags = []
  if (!isLoading) {
    accommodationData = accommodationsList.find(
      (accommodation) => accommodation.id === id
    )
    console.log(accommodationData)

    tags = accommodationData.tags.map((tag, index) => {
      return <Tag key={index} value={tag} />
    })
  }

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <article className="accommodation">
          <header className="accommodation__header">
            <section className="accommodation__infos">
              <MainTitle
                title={accommodationData.title}
                location={accommodationData.location}
              />
              <div className="accommodation__tags">{tags}</div>
            </section>
            <section className="accommodation__host__infos">
              <Host host={accommodationData.host} />
            </section>
          </header>

          <p>{accommodationData.id}</p>
        </article>
      )}
    </div>
  )
}
export default Accommodation

import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/Hooks'
import Loader from '../components/Loader'
import Tag from '../components/Tag'
import HeaderAccommodation from '../components/HeaderAccommodation'
import Slider from '../components/Slider'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

function Accommodation() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`/logements.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  const accommodationsList = data ? data : []
  let accommodationData = {}
  let tags = []
  let rating = 0
  let equipments = []

  if (!isLoading) {
    accommodationData = accommodationsList.find(
      (accommodation) => accommodation.id === id
    )
    console.log(accommodationData)

    tags = accommodationData.tags.map((tag, index) => {
      return <Tag key={index} value={tag} />
    })

    rating = accommodationData.rating

    equipments = accommodationData.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
    })
  }

  return (
    <div id="content">
      <div className="container">
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <article className="accommodation">
            <Slider images={accommodationData.pictures} />
            <HeaderAccommodation
              title={accommodationData.title}
              location={accommodationData.location}
              host={accommodationData.host}
              tags={tags}
              rating={rating}
            />
            <section className="accommodation__description">
              <Accordion
                type="text"
                title="Description"
                data={accommodationData.description}
              />
              <Accordion type="list" title="Equipements" data={equipments} />
            </section>
          </article>
        )}
      </div>
      <Footer />
    </div>
  )
}
export default Accommodation

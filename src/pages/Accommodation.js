import React from 'react'
import Header from '../components/Header'
import { Navigate, useParams } from 'react-router-dom'
import { useFetch } from '../utils/Hooks'
import Loader from '../components/Loader'
import Tag from '../components/Tag'
import HeaderAccommodation from '../components/HeaderAccommodation'
import Slider from '../components/Slider'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import ErrorMessage from '../components/ErrorMessage'

function Accommodation() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`/logements.json`)

  if (error) {
    return (
      <div id="content">
        <div className="container">
          <Header />
          <ErrorMessage
            message="Oups! Il y a un problème technique"
            texteLien="Retourner sur la page d'accueil."
            lien="/"
          />
        </div>
        <Footer />
      </div>
    )
  }

  // Variables init
  let accommodationData = {}
  let tags = []
  let rating = 0
  let equipments = []

  if (!isLoading && data) {
    accommodationData = data.find((accommodation) => accommodation.id === id)

    if (accommodationData !== undefined) {
      tags = accommodationData.tags.map((tag, index) => {
        return <Tag key={index} value={tag} />
      })

      rating = accommodationData.rating

      equipments = accommodationData.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
      })
    } else {
      return (
        // <div id="content">
        //   <div className="container">
        //     <Header />
        //     <ErrorMessage
        //       message="Oups! L'appartement recherché n'existe pas."
        //       texteLien="Retourner sur la liste des appartements."
        //       lien="/"
        //     />
        //   </div>
        //   <Footer />
        // </div>
        <Navigate to="/error" replace={true} />
      )
    }
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

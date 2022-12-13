import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'
import imageHero from '../assets/bandeau_about.png'
import Hero from '../components/Hero'

const About = () => {
  const datas = [
    {
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div id="content">
      <div className="container">
        <Header />
        <Hero image={imageHero} />
        <div className="about-wrapper">
          {datas.map((data, index) => {
            return (
              <Accordion
                key={index}
                type="text"
                title={data.title}
                data={data.description}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

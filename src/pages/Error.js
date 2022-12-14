import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorMessage from '../components/ErrorMessage'

const Error = () => {
  return (
    <div id="content">
      <div className="container">
        <Header />
        <ErrorMessage
          message="Oups! La page que vous demandez n'existe pas."
          texteLien="Retourner sur la page d’accueil"
          lien="/"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Error

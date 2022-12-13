import React from 'react'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import imageLogo from '../assets/logo_kasa.svg'

const Header = () => {
  return (
    <header className="header">
      <Logo logo={imageLogo} />
      <Navigation />
    </header>
  )
}

export default Header

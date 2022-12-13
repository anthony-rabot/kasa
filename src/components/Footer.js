import React from 'react'
import Logo from '../components/Logo'
import imageLogo from '../assets/footer_logo.svg'

const Footer = () => {
  let date = new Date().getFullYear()

  return (
    <footer className="footer">
      <Logo logo={imageLogo} />
      <p>© {date} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Accommodation from './pages/Accommodation'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="/appartement/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

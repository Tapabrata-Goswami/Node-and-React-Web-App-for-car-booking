// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Hero from './components/hero/Hero'
import Infobox from './components/infobox/Infobox'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Infobox />
    </div>
  )
}

export default App
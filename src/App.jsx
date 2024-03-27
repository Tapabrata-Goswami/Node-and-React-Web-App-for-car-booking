// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Hero from './components/hero/Hero'
import Infobox from './components/infobox/Infobox'
import Carlist from './components/carlist/Carlist'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Infobox />
      <Carlist />
      <Footer />
    </div>
  )
}

export default App
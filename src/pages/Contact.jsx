import React from 'react'
import Hero from '../components/contacthero/ContactHero'
import Infobox from '../components/contactinfo/contactinfo'
import Mapbox from '../components/mapbox/Mapbox'

const Contact = () => {
  return (
    <div>
        <Hero />
        <Infobox />
        <Mapbox />
    </div>
  )
}

export default Contact
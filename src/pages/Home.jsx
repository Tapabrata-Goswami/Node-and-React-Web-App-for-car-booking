import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero';
import Infobox from '../components/infobox/Infobox';
import Carlist from '../components/carlist/Carlist';
import Footer from '../components/footer/Footer';

const Home = () => {
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

export default Home
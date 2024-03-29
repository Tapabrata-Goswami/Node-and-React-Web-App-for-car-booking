import React from 'react'
import AboutUsHero from '../components/aboutushero/AboutUsHero'
import Aboutusimage from '../components/aboutusimage/Aboutusimage'
import Aboutinfobox from '../components/aboutinfobox/Aboutinfobox'
import Aboutsecondimage from '../components/aboutsecondimagebox/Aboutsecondimage'


const About = () => {
  return (
    <div>
        <AboutUsHero/>
        <Aboutusimage/>
        <Aboutinfobox/>
        <Aboutsecondimage/>
    </div>
  )
}

export default About
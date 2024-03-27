import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
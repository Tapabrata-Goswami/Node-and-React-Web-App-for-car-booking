/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/Zipcarz-logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])


  return (
    <nav className={`container-fluid ${sticky? 'dark-nav' : ''}`}>
      <div className="container">
        <div className="row align-items-center nav-bar-row">
          <div className="col-md-4">
            <img className="nav-bar-logo" src={logo} alt="" />
          </div>
          <div className="col-md-6 main-menu-coloumn">
            <ul className="d-flex justify-content-around align-items-center main-menu">
              <li><a href="/">Home</a></li>
              <li><a href="#">Vechils</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <a href="#" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
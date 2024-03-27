/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/Zipcarz-logo.png'

const Navbar = () => {
  return (
    <nav className="container-fluid">
      <div className="container">
        <div className="row align-items-center nav-bar-row">
          <div className="col-md-4">
            <img className="nav-bar-logo" src={logo} alt="" />
          </div>
          <div className="col-md-6 main-menu-coloumn">
            <ul className="d-flex justify-content-around align-items-center main-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Vechils</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
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
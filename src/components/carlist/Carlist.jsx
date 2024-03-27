import React from 'react'
import './Carlist.css'
import CarImage1 from '../../assets/images/Grey-Tesla.png'
import CarImage2 from '../../assets/images/toyta-saloon.png'
const Carlist = () => {
  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <p className=
          "sub-heading text-center">Vehicles</p>
        <h1 className="heading text-center">Choose Your Vehicle</h1>
      </div>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-3">
          <div className="card card-car">
              <img
              className="rounded" 
              src={CarImage1} 
              alt=""
               />
               <h4 className="card-heading">Car Name</h4>
               <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-car">
              <img
              className="rounded" 
              src={CarImage1} alt="" />
              <h4 className="card-heading">Car Name</h4>
               <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-car">
              <img src={CarImage2} alt="" />
              <h4 className="card-heading">Car Name</h4>
               <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card card-car">
              <img src={CarImage2} alt="" />
              <h4 className="card-heading">Car Name</h4>
               <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>

        </div>
        <div className="container text-center mt-5">
        <a href="#" className="btn btn-outline-info text-center">Explore more</a>
        </div>
        
      </div>
    </div>
  )
}

export default Carlist
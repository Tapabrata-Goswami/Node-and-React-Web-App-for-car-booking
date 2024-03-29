import React from 'react'
import './ABoutUsHero.css'
import GroupCars from '../../assets/images/Group-cars.png'

const AboutUsHero = () => {
  return (
    <div className="container-fluid">
                <div className="container">
            <div className="row hero-row justify-content-between">
                <div className="col-md-6 d-flex align-items-center hero-content">
                    <div>
                    <p className="sub-heading">ABOUT US</p>
                    <h1 className="heading">All the Services We Will Provide You</h1>
                    <p className="description">Variations available, but the majority have suffered are alteration.</p>
                    <div className="about-check-box-containers">
                        <div className="d-flex about-check-box-row">
                            <div><i className="fa-solid fa-check"></i> Many Locations</div>
                            <div><i className="fa-solid fa-check"></i> 24/7 Support</div>
                        </div>
                        <div className="d-flex about-check-box-row">
                            <div><i className="fa-solid fa-check"></i> Mileage Unlimited</div>
                            <div className="extra"><i className="fa-solid fa-check"></i> Variety of Cars</div>
                        </div>
                    </div>
                    <a href="" className="btn btn-outline-info">Book Now</a>
                    </div>
                    
                </div>
                <div className="col-md-6 pt-5 d-flex justify-content-center hero-image-container">
                    <img
                        src={GroupCars}
                        className="hero-image"
                        alt="Car Image"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsHero
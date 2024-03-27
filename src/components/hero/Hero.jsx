/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/images/hero-car-images.png'
import GroupDotImage from '../../assets/images/group-dot.png'
import RoundedIamge from '../../assets/images/rounded-image.png'

const Hero = () => {
    return (
       <div className="container-fluid">
        <div className="container">
            <div className="row hero-row justify-content-between">
                <div className="col-md-6 d-flex align-items-center hero-content">
                    <div>
                    <p className="sub-heading">Book Now Your Experience</p>
                    <h1 className="heading">Find & Book The Best <span className="heading-blue">Cars & Buses</span> Easily</h1>
                    <p className="description">Want to book a car for camping, City riding or Airport? book the best
cars from us to get best experience.</p>
                    </div>
                    
                </div>
                <div className="col-md-6 pt-5 d-flex justify-content-center hero-image-container">
                    <img
                        className="group-dot"
                        alt="Group Dot"
                        src={GroupDotImage}
                        />
                    <img
                        src={HeroImage}
                        className="hero-image"
                        alt="Car Image"
                    />
                    <img 
                    className="rounded-image"
                    src={RoundedIamge} 
                    alt="" />
                </div>
            </div>
        </div>
       </div>
    )
}

export default Hero
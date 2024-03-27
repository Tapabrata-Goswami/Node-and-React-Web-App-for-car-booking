import React from 'react'
import './Mapbox.css'
import mapimage from '../../assets/images/mapbox.png'

const Mapbox = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={mapimage}
                            className="map-image"
                            alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="sub-heading conract-map-subheading">Our Location</p>
                        <h1 className="heading conract-map-heading">Connecting near and far</h1>
                        <h4 className="contact-map-left-list-heading" >Headquaters</h4>
                        <ul className="contact-map-left-list">
                            <li>Street: Effectual Bldg Wan Chai</li>
                            <li>Street: Effectual Bldg Wan Chai</li>
                            <li>City:Wan Chai District</li>
                            <li>State/province/area: Hong Kong</li>
                            <li>Phone number:3583 5053</li>
                            <li>Country calling code:+852</li>
                            <li>Country:Hong Kong</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mapbox
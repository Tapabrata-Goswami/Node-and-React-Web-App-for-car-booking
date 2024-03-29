import React from 'react'
import "./Howitsworks.css"

const Howitsworks = () => {
    return (
        <div className="container-fluid">
            <div className="container mt-5">
                <p className=
                    "sub-heading text-center">Actions</p>
                <h1 className="heading text-center">How its Works</h1>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card how-its-card">
                            <div className="text-center how-its-icon-box">
                            <i className="fa-solid fa-location-dot how-its-icon"></i>
                            </div>
                            
                            <h4 className="text-center how-icon-heading">Choose a location</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card how-its-card">
                            <div className="text-center how-its-icon-box">
                            <i className="fa-solid fa-calendar-day how-its-icon"></i>
                            </div>
                            
                            <h4 className="text-center how-icon-heading">Select A Date</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card how-its-card">
                            <div className="text-center how-its-icon-box">
                            <i className="fa-solid fa-car how-its-icon"></i>
                            </div>
                            
                            <h4 className="text-center how-icon-heading">Find The Right Car</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card how-its-card">
                            <div className="text-center how-its-icon-box">
                            <i className="fa-solid fa-check-to-slot how-its-icon"></i>
                            </div>
                            
                            <h4 className="text-center how-icon-heading">Book A Car</h4>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitsworks
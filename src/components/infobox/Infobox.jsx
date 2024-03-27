import React from 'react'
import './Infobox.css'

const Infobox = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="container infobox-container">
                <div className="row align-items-center">
                   <div className="col-md-4">
                        <h1 className="heding-white">
                            24/7<br/><span className="after-span-heading">on spot support</span>
                        </h1>
                   </div>
                   <div className="col-md-4">
                        <p className="info-description">Our carefully vetted drivers are committed to providing safe and comfortable rides, every time. Rest assured knowing that your journey is in good hands with our experienced professionals.</p>
                   </div>
                   <div className="col-md-4">
                    <ul className="listofSrvies-infobox">
                        <li className="d-flex align-items-center"><i className="fa-solid fa-house"></i><p>300+ Pickup location to pick from</p></li>
                        <li className="d-flex align-items-center"><i className="fa-solid fa-house"></i><p>300+ Pickup location to pick from</p></li><li className="d-flex align-items-center"><i className="fa-solid fa-house"></i><p>300+ Pickup location to pick from</p></li>
                    </ul>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default Infobox
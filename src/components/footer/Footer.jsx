import React from 'react'
import './Footer.css'
import logo from '../../assets/images/Zipcarz-logo.png'

const Footer = () => {
    return (
        <div className="Container-fluid mt-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} alt="" />
                        <p className="footer-logo-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div className="col-md">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-options">
                            <li><a href="#">Cars & Buses Booking</a></li>
                            <li><a href="#">+852 1235 5689</a></li>
                            <li><a href="#">info&support@zipcarz.com</a></li>
                            <li><a href="#">Parkstreet, HongKong</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-options">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Vehicles</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-options">
                            <li><a href="#">Partnerships</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <p>© ZipCarz 2024, All Right Reserverd</p>
                    </div>
                    <div className="col-md-6 text-end footer-social-icons ">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
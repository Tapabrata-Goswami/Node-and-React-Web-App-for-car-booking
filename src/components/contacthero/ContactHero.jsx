import React from 'react'
import './ContactHero.css'
import HeroImage from '../../assets/images/hero-car-images.png'
import GroupDotImage from '../../assets/images/group-dot.png'
import RoundedIamge from '../../assets/images/rounded-image.png'

const ContactHero = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row hero-row justify-content-between">
                    <div className="col-md-6 d-flex align-items-center hero-content">
                        <div>
                            <p className="sub-heading">Need Help</p>
                            <h1 className="heading">Contact Us</h1>
                            <p className="description pb-3">Email, Call,  or complete the form to learn how ZipCarz can solve your booking problem</p>
                            <p className="description pb-3">info@zipcarz.com</p>
                            <p className="description pb-3">+852 1235 5689</p>
                            <p className="description pb-3">Customer Support</p>

                        </div>

                    </div>
                    <div className="col-md-6 pt-5 d-flex justify-content-center hero-image-container">
                        <img
                            className="group-dot"
                            alt="Group Dot"
                            src={GroupDotImage}
                        />
                        <div className="hero-image contact-container-form">
                            <h2 className="contact-hero-form-heading text-center">Get In Touch</h2>
                            <p className="description pb-3 text-center">You can reach us anytime</p>
                            <form>
                                <div className="row pb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="How can we help" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href="" className="btn btn-primary">Submit</a>
                                </div>
                                <p className="smallParagraph text-center">By contacting us, you agree to our terms of service
and Privacy Policy</p>
                            </form>
                        </div>
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

export default ContactHero
import React from 'react'
import "./contactinfo.css"

const contactinfo = () => {
  return (
    <div className="container-fluid mt-5">
    <div className="container infobox-container">
        <div className="row align-items-center">
            <div className="col-md-4 ">
            <h6 className="contact-info-box-heading text-center pb-3">Customer Support</h6>
                <p className="info-description text-center">Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className="col-md-4 contact-info-small-box">
                <h6 className="contact-info-box-heading text-center pb-3">Feedback & Suggestions</h6>
                <p className="info-description text-center">We value your feedback and are contionously working to improve zipcarz. your input is crucial in shaping the future of zipcarz.</p>
            </div>
            <div className="col-md-4">
            <h6 className="contact-info-box-heading text-center pb-3">Technical Inquires</h6>
                <p className="info-description text-center">For Technical Inquries questions, please contact us at technical@zipcarz.com</p>
            </div>
        </div>
    </div>

</div>
  )
}

export default contactinfo
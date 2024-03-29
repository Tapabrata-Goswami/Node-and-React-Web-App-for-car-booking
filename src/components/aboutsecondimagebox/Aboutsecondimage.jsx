import React from 'react'
import './Aboutsecond.css'

import aboutusiame1 from '../../assets/images/image-3-about.png'
import GroupDotImage from '../../assets/images/group-dot.png'
import RoundedIamge from '../../assets/images/rounded-image.png'

const Aboutsecondimage = () => {
  return (
    <div className="container-fluid mt-5">
    <div className="container">
        <div className="row hero-row justify-content-between">
        <div className="col-md-6 d-flex align-items-center hero-content">
                <div>
                    <p className="sub-heading">Our Story</p>
                    <h1 className="heading">Our commitment to
innovation, integrity, and
excellence</h1>
                    <p className="description">Your premier destination for hassle-free transportation solutions. Founded with the vision of transforming the way people travel, we're dedicated to providing a seamless and reliable ride experience for our customers.
                        <br />
                        <br />
                        Our mission is simple: to make transportation easier, safer, and more convenient for everyone. We believe that getting from point A to point B should be stress-free and enjoyable, and we're committed to delivering on that promise every day.</p>
                </div>

            </div>
            <div className="col-md-6 pt-5 d-flex justify-content-center hero-image-container">
                <img
                    className="group-dot"
                    alt="Group Dot"
                    src={GroupDotImage}
                />
                <img
                    src={aboutusiame1}
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

export default Aboutsecondimage
import React from 'react'

const Contact = () => {
    return (
        <>
            <main>
                <div className="contact_wrapper">
                    <div className="container ">
                        <h2 className="text-center contact_title">Contact Us</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact_area">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="contact_form">
                                                <div className="form_areas">
                                                    <form method="post" encType="multipart/form-data">

                                                        {/* Full Name */}
                                                        <div className="m_gap mb-3">
                                                            <label htmlFor="fullname" className="form-label label_style">Full Name <span className="requried">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control form_input" id="fullname"
                                                                name="fullname"
                                                                placeholder="Enter Your Full Name"
                                                                aria-describedby="emailHelp"
                                                            />

                                                        </div>

                                                        {/* Email */}
                                                        <div className="row">
                                                            <div className="col-md">
                                                                <div className="m_gap mb-3">
                                                                    <label htmlFor="email" className="form-label label_style">Email <span className="requried">*</span></label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control form_input"
                                                                        id="email"
                                                                        name="email"
                                                                        placeholder="Enter Your Email Id"
                                                                        aria-describedby="emailHelp"
                                                                    />

                                                                </div>
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="m_gap mb-3">
                                                                    <label htmlFor="mobilenumber" className="form-label label_style">Mobile Number</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form_input"
                                                                        id="mobilenumber"
                                                                        name="mobilenumber"
                                                                        aria-describedby="emailHelp"
                                                                        placeholder="Enter Your Mobile Number"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Message */}
                                                        <div className="m_gap mb-3">
                                                            <label htmlFor="msg" className="form-label label_style">Message<span className="requried">*</span></label>
                                                            <textarea
                                                                className="form-control form_input"
                                                                id="floatingTextarea2"
                                                                style={{ "height": "100px" }}
                                                            ></textarea>
                                                        </div>

                                                        {/* Button */}
                                                        <div className="text-center mt-5">
                                                            <button type="submit" className="btn_one">Register</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Map */}
                                        <div className="col-md-4">
                                            <div className="address">
                                                <div className="map_area">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21192705746!2d88.27731165151606!3d22.535570756362414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1674557643642!5m2!1sen!2sin" style={{ "width": "335px", "height": "445px", "style": "border:0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default Contact
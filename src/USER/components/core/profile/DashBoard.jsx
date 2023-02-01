import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const DashBoard = () => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const date_of_birth = new Date(user?.dob)
    const newDOB = `${date_of_birth.getUTCDay()}-${date_of_birth.getUTCMonth()}-${date_of_birth.getUTCFullYear()}`
    const [formValues, setFormValues] = useState({
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        dob: newDOB,
        country: user.country
    })

    // handleChange for onChange
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    // Edit button function
    function enabledEdit() {
        let inputs = document.getElementsByClassName("in_disa");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        // document.getElementById("saveChanges").style.display = "block";
        document.getElementById("saveChanges").classList.remove("hidden");
        document.getElementById("remEdit").classList.add("hidden");
    }

    return (
        <>
            <div className="content_wrapper">
                <div className="container">
                    <div className="user_information_area">
                        <h3 className="user_title">Personal Information</h3>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <div className="profile_img ">
                                    <img src="/assets/img/avatar.png" alt="" className="img-fluid" />
                                </div>
                                <div className="user_name">
                                    <h2 className=" text-center mt-3">{user?.full_name}</h2>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile_edit_form">
                                    <form action="" method="post">

                                        {/* Full Name */}
                                        <div className="mb-3">
                                            <label htmlFor="full_name" className="form-label label_style">Your Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control form_input in_disa"
                                                id="full_name"
                                                name="full_name"
                                                placeholder={user?.full_name}
                                                value={formValues.full_name}
                                                onChange={handleChange} disabled
                                            />
                                            {/* <!-- <div className="alert alert-danger mt-2" role="alert">
                                                            Please Enter Email Or Phone Number
                                                        </div> --> */}
                                        </div>

                                        {/* Email */}
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label label_style">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form_input in_disa"
                                                id="email"
                                                name="email"
                                                aria-describedby="emailHelp"
                                                placeholder={user?.email} disabled
                                                value={formValues.email}
                                                onChange={handleChange}
                                            />
                                            {/* <!-- <div className="alert alert-danger mt-2" role="alert">
                                                            Please Enter Email Or Phone Number
                                                        </div> --> */}
                                        </div>

                                        {/* Phone */}
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label label_style">Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control form_input in_disa"
                                                id="phone"
                                                name="phone"
                                                aria-describedby="emailHelp"
                                                placeholder={user?.phone} disabled
                                                value={formValues.phone}
                                                onChange={handleChange}
                                            />
                                            {/* <!-- <div className="alert alert-danger mt-2" role="alert">
                                                            Please Enter Email Or Phone Number
                                                        </div> --> */}
                                        </div>

                                        {/* DOB */}
                                        <div className="mb-3">
                                            <label htmlFor="dob" className="form-label label_style">Date Of Birth</label>
                                            <input
                                                type="text"
                                                className="form-control form_input in_disa"
                                                id="dob"
                                                name="dob"
                                                aria-describedby="emailHelp"
                                                placeholder={newDOB} disabled
                                                value={formValues.dob}
                                                onChange={handleChange}
                                            />
                                            {/* <!-- <div className="alert alert-danger mt-2" role="alert">
                                                            Please Enter Email Or Phone Number
                                                        </div> --> */}
                                        </div>

                                        {/* Country */}
                                        <div className="mb-3">
                                            <label htmlFor="country" className="form-label label_style">Address</label>
                                            <input
                                                type="text"
                                                className="form-control form_input in_disa"
                                                id="country"
                                                name="country"
                                                aria-describedby="emailHelp"
                                                placeholder={user?.country} disabled
                                                value={formValues.country}
                                                onChange={handleChange}
                                            />
                                            {/* <!-- <div className="alert alert-danger mt-2" role="alert">
                                                            Please Enter Email Or Phone Number
                                                        </div> --> */}
                                        </div>

                                        {/* Edit Button */}
                                        <div className="mt-5">
                                            <button type="button" className="editbtn edit"
                                                id="remEdit"
                                                onClick={enabledEdit}
                                            ><i className="fas fa-edit"></i> Edit</button>
                                            <button className="btn2 hidden" id="saveChanges" >Save Changes</button>

                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Congratulation John !</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4> $42.8k</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#!" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/9206435 1.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Total Winning</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4>42</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#!" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/winning.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Total Profit</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4> $42.8k</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#!" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/9206435 1.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard
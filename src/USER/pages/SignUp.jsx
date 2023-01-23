import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSignUp } from '../services/slice/AuthSlice'
import "slick-carousel/slick/slick.css";
import { Link, useNavigate } from 'react-router-dom'
import { fetchCountry, fetchStates } from '../services/slice/CountryStateSlice';

const SignUp = () => {
    const { signupErr } = useSelector((state) => state.authslice)
    const newSignupErr = signupErr[0]
    // console.log("Sign up", newSignupErr);
    const { countryData } = useSelector((state) => state.countrystateslice)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        full_name: "",
        email: "",
        phone: "",
        dob: "",
        country: "",
        password: ""
    })


    // handleChange Function for input change
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        const countryId = e.target.value

        if (e.target.value) {

        }

        if (countryId) {
            getCountryId(countryId)
        }
        // console.log(countryId)
    }


    // handleSubmit Function for form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchSignUp({ formValues, navigate }))
    }

    // Slider Settings
    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     autoplay: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // }

    // getCountryId
    const getCountryId = (name) => {
        // console.log(name);
        const c_Id = countryData.filter((item) => {
            if (item.name === name) {
                return item?.countries_id
            }
            return null
        })
        const id = c_Id[0]?.countries_id
        if (id) {
            dispatch(fetchStates(id))
        }
    }



    useEffect(() => {
        dispatch(fetchCountry())
    }, [dispatch, newSignupErr])

    return (
        <>
            <main className="main">

                <div className="wrapper_area margin-top-5">

                    <div className="log_area">

                        <div className="right_part">
                            <div className="form_areas">
                                <form method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>

                                    {/* Full name */}
                                    <div className="m_gap">
                                        <label htmlFor="fullname" className="form-label label_style">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control form_input"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Enter Your Full Name"
                                            aria-describedby="emailHelp"
                                            value={formValues.full_name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="m_gap">
                                        <label htmlFor="emailid" className="form-label label_style">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form_input"
                                            id="emailid"
                                            name="emailid"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Your Email Id"
                                            value={formValues.email}
                                            onChange={handleChange}

                                        />
                                    </div>

                                    <div className="row">

                                        {/* Date Of birth */}
                                        <div className="col-md">
                                            <div className="m_gap dob">
                                                <label htmlFor="dob" className="form-label label_style">Date Of Birth</label>
                                                {/* <!-- <input type="date" value="2017-01-01" min="1960-01-01" max="2019-01-01" className="form-control form_input"> --> */}
                                                <input
                                                    placeholder="Select your date"
                                                    type="text"
                                                    name="checkIn"
                                                    id="datepicker"
                                                    className="calendar form-control form_input cal_input"
                                                    value={formValues.dob}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Country */}
                                        <div className="col-md">
                                            <div className="m_gap">
                                                <label htmlFor="Country" className="form-label label_style">Country</label>
                                                <select
                                                    className="form-select form_input form_select"
                                                    aria-label="Default select example"
                                                    id="selects"
                                                    value={formValues.country}
                                                    onChange={handleChange}
                                                >
                                                    <option value="1"></option>
                                                    {
                                                        countryData?.map((country) => {
                                                            return (
                                                                <option key={country.countries_id
                                                                } value={country.name}>{country.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        {/* Create Password*/}
                                        <div className="col-md">
                                            <div className="m_gap mb-3">
                                                <label htmlFor="password" className="form-label label_style">Create Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form_input"
                                                    id="fullname"
                                                    name="fullname"
                                                    placeholder="Create Your Password"
                                                    aria-describedby="emailHelp"
                                                    value={formValues.password}
                                                    onChange={handleChange}
                                                />

                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="col-md">
                                            <div className="m_gap mb-3">
                                                <label htmlFor="password" className="form-label label_style">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form_input"
                                                    id="fullname"
                                                    name="fullname"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Confrim Password"
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn_one">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="left_part">
                            <div className="company_logo text-center">
                                <Link to="/"><img src="/assets/img/logo2.png" alt="" className="img-fluid" /></Link>
                            </div>
                            <h2 className="log_title">Welcome To Registration</h2>
                            <h6 className="dont">Already Have An Acount</h6>
                            <Link to="/login" className="Signup">Sing In</Link>
                        </div>
                    </div>
                </div>
            </main>
        </ >
    )
}

export default SignUp
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountry, fetchStates } from '../services/slice/CountryStateSlice';

const initialState = {
    address: "",
    roadName: "",
    pincode: "",
    country: "",
    state: "",
    cardNumber: "",
    exdate: "",
    cvv: ""
}

const PlaceOrder = () => {
    const [formValues, setFormValues] = useState(initialState)
    const [formErrors, setFormErrors] = useState({})
    const { countryData } = useSelector((state) => state.countrystateslice)
    const dispatch = useDispatch()

    //For onChange function
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        const countryId = e.target.value

        if (countryId) {
            getCountryId(countryId)
        }
    }
    // For onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

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

    // Validate Function
    const validate = (values) => {
        const error = {}

        // address
        if (!values.address) {
            error.address = "Address is required*"
        }
        // roadName
        if (!values.roadName) {
            error.roadName = "Road Name/ Area / Colony is required*"
        }
        // pincode
        if (!values.pincode) {
            error.pincode = "Pincode is required*"
        }
        // country
        if (!values.country) {
            error.country = "Country is required*"
        }
        // state
        if (!values.state) {
            error.state = "State is required*"
        }

        return error
    }

    // Expiry Date format function
    // const formatString = (e) => {
    //     // var inputChar = String.fromCharCode(e.keyCode);
    //     var code = e.keyCode;
    //     var allowedKeys = [8];
    //     if (allowedKeys.indexOf(code) !== -1) {
    //         return;
    //     }

    //     e.target.value = e.target.value.replace(
    //         /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    //     ).replace(
    //         /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    //     ).replace(
    //         /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    //     ).replace(
    //         /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    //     ).replace(
    //         /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    //     ).replace(
    //         /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    //     ).replace(
    //         /\/\//g, '/' // Prevent entering more than 1 `/`
    //     );
    // }



    useEffect(() => {
        dispatch(fetchCountry())
    }, [dispatch])

    return (
        <>
            <main>

                <div className="cart_list_wrapper pb-5">
                    <div className="container pt-5">
                        <div className="bred">
                            <div className="product_title_top">
                                <h3>You Order Payment</h3>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                </ol>
                            </nav>

                        </div>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-8">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="payment_form_area">
                                        <div className="delivery_address">
                                            <h2 className="mb-2"> Address Imformation</h2>
                                            <hr />
                                        </div>

                                        {/* Address */}
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label label_style">Delivey Address</label>
                                            <input
                                                type="text"
                                                className="form-control form_input"
                                                id="address"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Your Delivery Address"
                                                name='address'
                                                value={formValues.address}
                                                onChange={handleChange} />
                                            {/* Address Validation */}
                                            {
                                                formErrors.address ?
                                                    <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                        {formErrors.address}
                                                    </div>
                                                    : null
                                            }

                                        </div>

                                        {/* Road Name/ Area / Colony */}
                                        <div className="mb-3">
                                            <label htmlFor="roadName" className="form-label label_style">Road Name/ Area / Colony</label>
                                            <input
                                                type="text"
                                                className="form-control form_input"
                                                id="roadName"
                                                aria-describedby="emailHelp"
                                                placeholder="Road Name/ Area / Colony"
                                                name='roadName'
                                                value={formValues.roadName}
                                                onChange={handleChange} />
                                            {/* Road Name/ Area / Colony validaton */}
                                            {
                                                formErrors.roadName ? <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                    {formErrors.roadName}
                                                </div>
                                                    : null
                                            }

                                        </div>

                                        {/* Pincode */}
                                        <div className="mb-3">
                                            <label htmlFor="pincode" className="form-label label_style">Pincode</label>
                                            <input
                                                type="text"
                                                className="form-control form_input"
                                                id="pincode"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Your Pincode"
                                                name='pincode'
                                                value={formValues.pincode}
                                                onChange={handleChange}
                                            />
                                            {/* Pincode Validation */}
                                            {
                                                formErrors.pincode ?
                                                    <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                        {formErrors.pincode}
                                                    </div>
                                                    : null
                                            }

                                        </div>

                                        <div className="row">
                                            {/* Country */}
                                            <div className="col-md">
                                                <label htmlFor="country" className="form-label label_style">Country</label>
                                                <select
                                                    className="form-select form_input form_select"
                                                    aria-label="Default select example"
                                                    id="selects"
                                                    name='country'
                                                    value={formValues.country}
                                                    onChange={handleChange}
                                                >
                                                    <option value="1">Select...</option>
                                                    {
                                                        countryData?.map((country) => {
                                                            return (
                                                                <option key={country.countries_id
                                                                } value={country.name + "||" + country.countries_id}>{country.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                {/* Country Validation */}
                                                {
                                                    formErrors.country ?
                                                        <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                            {formErrors.country}
                                                        </div>
                                                        : null
                                                }
                                            </div>

                                            {/* State */}
                                            <div className="col-md mb-5">
                                                <label htmlFor="state" className="form-label label_style">State</label>
                                                <select className="form-select form_input form_select" aria-label="Default select example" id="selects">

                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                {/* State Validation */}
                                                {
                                                    formErrors.state ?
                                                        <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                            {formErrors.state}
                                                        </div>
                                                        : null
                                                }

                                            </div>
                                        </div>
                                        {/* <!-- payment information --> */}
                                        <div className="delivery_address">
                                            <h2 className="mb-2">Payment</h2>
                                            <hr />
                                        </div>
                                        <div className="payment_form">

                                            <div className="row">
                                                {/* Wallet money */}
                                                <div className="col-md-6">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="inlineRadio1"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                Wallet Money <span className="upi_icon"><img src="/assets/img/pay (2).png" alt="" /></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-5">
                                            <button className="btn2">Procced</button>
                                        </div>
                                    </div>
                                </form>

                            </div>


                            <div className="col-md-4 ">
                                <div className="purches_sum fixed_right">
                                    <div className="price_area_wrapper ">
                                        <h3 className="price_title">Purchase Summary</h3>
                                        <div className="price_inner">
                                            <div className="price_item borderbottom">
                                                <h4 className="price_text">Price <span> (1 Item):</span></h4>
                                                <h6 className="price_value"><span>€</span> 1,789</h6>
                                            </div>
                                            <div className="price_item mb-5">
                                                <h4 className="price_text">Delivery Charges:</h4>
                                                <h6 className="delivery">Free</h6>
                                            </div>
                                            <div className="price_item mt-5">
                                                <h4 className="price_text">Total Payables:</h4>
                                                <h6 className="price_value"><span>€</span> 1,789</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order_history_summary">
                                        <div className="order_itrm_one">
                                            <div className="product_order_img">
                                                <img src="/assets/img/product1.jpg" alt="" />
                                            </div>
                                            <div className="order_information">
                                                <div className="product_order_title">
                                                    <h6>Dual Action Exfoliator</h6>
                                                </div>
                                                <div className="other_info">
                                                    <p className="amount">Number Of Ticket : 2</p>
                                                    <p className="tic_price">Price Of Ticket : 1235</p>
                                                    <h6> <span className="text-danger fs-4">€5,000</span>&nbsp;&nbsp;<span>€</span><span className="text-decoration-line-through">10,000</span>&nbsp;&nbsp;<span className="discount_percent">50%</span></h6>
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

export default PlaceOrder
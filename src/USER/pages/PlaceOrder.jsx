import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    address: "",
    roadName: "",
    pincode: "",
    city: "",
    state: "",
    cardNumber: "",
    exdate: "",
    cvv: ""
}

const PlaceOrder = () => {
    const [formValues, setFormValues] = useState(initialState)
    // const [formError, setFormError] = useState({})

    //For onChange function
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    // For onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        // setFormError(validate(formValues))
    }

    // Validate Function
    // const validate = (value) => {
    //     const error = {}
    //     if (!value.address) {
    //         error.address = "Please ensure all required fields are filled in"
    //         console.log("Error");
    //     }
    //     return error
    // }

    return (
        <>
            <main>
                <div className="cart_list_wrapper pb-5">

                    {/* Home/CheckOut */}
                    <div className="container pt-5">
                        <div className="bred">
                            <div className="product_title_top">
                                <h3>You Order Payment</h3>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                                                onChange={handleChange}
                                            />
                                            <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                A simple danger alert—check it out!
                                            </div>
                                        </div>

                                        {/* Road Name/ Area / Colony */}
                                        <div className="mb-3">
                                            <label htmlFor="roadName" className="form-label label_style">Road Name/ Area / Colony</label>
                                            <input
                                                type="text"
                                                className="form-control form_input"
                                                id="roadName"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Your Delivery Address"
                                                name='roadName'
                                                value={formValues.roadName}
                                                onChange={handleChange}
                                            />
                                            <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                A simple danger alert—check it out!
                                            </div>
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
                                            <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                A simple danger alert—check it out!
                                            </div>
                                        </div>
                                        <div className="row">

                                            {/* Country */}
                                            <div className="col-md">
                                                <label htmlFor="Country" className="form-label label_style">City</label>
                                                <select className="form-select form_input form_select" aria-label="Default select example" id="selects">

                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            {/* State */}
                                            <div className="col-md mb-5">
                                                <label htmlFor="Country" className="form-label label_style">State</label>
                                                <select className="form-select form_input form_select" aria-label="Default select example" id="selects">

                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* <!-- payment information --> */}
                                        <div className="delivery_address">
                                            <h2 className="mb-2">Payment Imformation</h2>
                                            <hr />
                                        </div>
                                        <div className="payment_form">

                                            <div className="row">

                                                {/* MTN Mobile Money */}
                                                <div className="col-md-6">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="inlineRadio1/"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                MTN Mobile Money <span className="upi_icon"><img src="/assets/img/pay (2).png" alt="" /></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Ornage Money */}
                                                <div className="col-md-6">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="inlineRadio1/"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                Ornage Money <span className="upi_icon"><img src="/assets/img/pay (1).png" alt="" /></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            {/* <!-- credit card payment --> */}
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Credit Or Debit Card
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">

                                                            {/* Card Number */}
                                                            <div className="mb-3">
                                                                <label htmlFor="cardNumber" className="form-label label_style">Card Number</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form_input"
                                                                    id="cardNumber"
                                                                    name="cardNumber"
                                                                    value={formValues.cardNumber}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter Card Number"
                                                                />
                                                                <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                    A simple danger alert—check it out!
                                                                </div>
                                                            </div>

                                                            <div className="row">

                                                                {/* Expiry Date */}
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="exdate" className="form-label label_style">Expiry Date</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form_input" id="exdate"
                                                                            name="exdate"
                                                                            value={formValues.exdate}
                                                                            onChange={handleChange}
                                                                            placeholder="Enter Expiry Date"
                                                                        />
                                                                        <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                            A simple danger alert—check it out!
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* CVV */}
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label htmlFor="cvv" className="form-label label_style">CVV</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form_input"
                                                                            id="cvv"
                                                                            name='cvv'
                                                                            value={formValues.cvv}
                                                                            onChange={handleChange}
                                                                            aria-describedby="emailHelp" placeholder="Enter CVV"
                                                                        />
                                                                        <div className="alert alert-danger mt-3 fs-4  " role="alert">
                                                                            A simple danger alert—check it out!
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
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

                                    {/* Purchase summary */}
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

                                    {/* Order History */}
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
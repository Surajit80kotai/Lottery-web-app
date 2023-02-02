import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountry, fetchStates } from '../services/slice/CountryStateSlice';
import { getBalance } from '../services/slice/UserSlice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { placeOrder } from '../services/slice/PaymentSlice';
import { emptyCart } from '../services/slice/CartSlice';

const initialState = {
    address: "",
    roadName: "",
    pincode: "",
    country: "",
    state: ""
}

const PlaceOrder = () => {
    // Staes Input filds and validation
    const [formValues, setFormValues] = useState(initialState)
    const [formErrors, setFormErrors] = useState({})

    // State for price calculation
    const [amount, setAmount] = useState({ subtotal: 0, discount: 0, total: 0 })

    // State for country & state data
    const { countryData } = useSelector((state) => state.countrystateslice)
    const { stateData } = useSelector((state) => state.countrystateslice)

    // State for cart_data & user balance
    const { cart_data } = useSelector((state) => state.cartslice)
    const { balance } = useSelector((state) => state.userslice)
    const dispatch = useDispatch()

    const image = process.env.REACT_APP_NODE_HOST

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
        const c_Id = countryData.filter((item) => {
            if (item.name === name.split("||")[0]) {
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
        // wallet
        // if (values.wallet < balance?.balance) {
        //     error.wallet = "Insuficient balance*"
        // }

        return error
    }

    // On orderPlace function
    const orderPlace = () => {
        const errorLen = Object.keys(formErrors).length;
        if (errorLen) {
            // react toast message
            toast.success('Order Placed')
        }
        const cartData = cart_data.reduce((acc, { resp, info }) => {
            // const { resp, info } = cur
            console.log(info);
            acc.push({
                id: resp._id,
                user_id: resp.user_id,
                product_id: resp.product_id,
                quantity: resp.quantity,
                ticket_price: info[0].ticket_price,
                discount_percentage: info[0].discount_percentage
            })
            return acc
        }, [])

        const orderData = { address: formValues, price: amount, product_info: cartData }
        dispatch(placeOrder(orderData))
        dispatch(emptyCart())
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchCountry())
        dispatch(getBalance())
        calculateSum()
    }, [cart_data, dispatch])

    // Calculate Sum function
    const calculateSum = () => {
        let st = 0
        let dc = 0

        cart_data?.map(({ resp, info }) => {
            if (info[0].discount_percentage) {
                st += (Number((info[0].ticket_price * resp.quantity)))
                dc += (Number(((info[0].ticket_price) * (info[0].discount_percentage) / 100) * resp.quantity))
                return Number(st)
            } else {
                st += Number(info[0].ticket_price * resp.quantity)
                return st
            }
        })
        return setAmount({
            ...amount,
            subtotal: st,
            discount: dc,
            total: st - dc
        })
    }

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

                            {/* Left Side Of PlaceOrder */}
                            <div className="col-md-8">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="payment_form_area">
                                        <div className="delivery_address">
                                            <h2 className="mb-2"> Address Imformation</h2>
                                            <hr />
                                        </div>

                                        {/* Address */}
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label label_style">Billing Address</label>
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
                                                                } value={country.name + "||" + country.countries_id}
                                                                >{country.name}</option>
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
                                                <select
                                                    className="form-select form_input form_select"
                                                    aria-label="Default select example"
                                                    id="selects"
                                                    name='state'
                                                    value={formValues.state}
                                                    onChange={handleChange}>
                                                    <option value="">Select...</option>
                                                    {
                                                        stateData?.map((state) => {
                                                            return (
                                                                <option key={state.state_id} value={state.name + "||" + state.state_id}>{state.name}</option>
                                                            )
                                                        })
                                                    }
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

                                            {/* Wallet */}
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="upi_one">
                                                        <div className="form-check form-check-inline">
                                                            {/* <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                id="inlineRadio1"
                                                                name='wallet'
                                                                checked
                                                                value={formValues.wallet}
                                                                onChange={handleChange}
                                                            /> */}
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                Wallet Balance <span className="upi_icon fw-bolder">{balance?.balance}</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/* Wallet Validation */}
                                                    {
                                                        ((amount.total).toFixed(2) > balance?.balance) ?
                                                            <div className="alert alert-danger mt-2  fs-4" role="alert">
                                                                <span><i className="fas fa-balance-scale-right"></i></span> Insaficinent Wallet Balance
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-5">
                                            {
                                                ((amount.total).toFixed(2) < balance?.balance) ?
                                                    <button onClick={orderPlace} className="btn2">Procced</button>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </form>

                            </div>

                            {/* Right Side Of PlaceOrder */}
                            <div className="col-md-4 ">
                                <div className="purches_sum fixed_right">
                                    <div className="price_area_wrapper ">
                                        <h3 className="price_title">Purchase Summary</h3>
                                        <div className="price_inner">
                                            <div className="price_item borderbottom">
                                                <h4 className="price_text">Price <span> ({cart_data?.length} Item):</span></h4>
                                                <h6 className="price_value">
                                                    {cart_data ? <span>{cart_data[0]?.info[0]?.currency}</span> : 0}

                                                    {(amount.subtotal).toFixed(2)}
                                                </h6>
                                            </div>
                                            <div className="price_item mb-5">
                                                <h4 className="price_text">Total Discount :</h4>
                                                <h6 className="price_value text-success">
                                                    {cart_data ? <span>{cart_data[0]?.info[0]?.currency}-</span> : 0}
                                                    {(amount.discount).toFixed(2)}
                                                </h6>
                                            </div>
                                            <div className="price_item mt-5">
                                                <h4 className="price_text">Total Payables:</h4>
                                                <h6 className="price_value">
                                                    {cart_data ? <span>{cart_data[0]?.info[0]?.currency}</span> : 0}

                                                    {(amount.total).toFixed(2)}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item List */}
                                    <div className="order_history_summary">
                                        {
                                            cart_data?.length ?
                                                cart_data?.map((item) => {
                                                    // cart_data?.map((item) => {
                                                    return (
                                                        <div className="cart_list_item" key={item.resp._id}>
                                                            <div className="cart_item_img">
                                                                <img src={image + item?.info[0]?.main_image} alt="" className="img-fluid" />
                                                            </div>
                                                            <div className="cart_item_content">
                                                                <div className="cart_title">
                                                                    <h3>{item?.info[0]?.ticket_name}</h3>
                                                                </div>
                                                                <div className="other_info">
                                                                    <p className="amount fw-bold text-dark">Item Quantity : {item?.resp?.quantity}</p>
                                                                    {/* Calculation of discounted price */}
                                                                    <p className="tic_price fw-bold text-dark">Price Of Ticket :
                                                                        {
                                                                            (Number(item?.info[0]?.ticket_price - ((item?.info[0]?.ticket_price * item?.info[0]?.discount_percentage) / 100)) * item?.resp?.quantity).toFixed(2)
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="date_result">
                                                                    {/* Calculating the data */}
                                                                    <h5><span><img src="/assets/img/3135783 1.png" alt="" /></span>Result on <span className="fw-bold">
                                                                        {new Date(item?.info[0]?.time_left).toLocaleString('en-US', {
                                                                            month: 'short',
                                                                            day: '2-digit',
                                                                            year: 'numeric'
                                                                        })}
                                                                    </span></h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <div className='text-center' >
                                                    <img src="/assets/img/emptycart.png" alt="" />
                                                    <h2>Your Cart Is Empty</h2>
                                                </div>

                                        }


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
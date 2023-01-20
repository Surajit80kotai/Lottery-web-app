import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TrustedPayment from '../components/common/trustedPayment/TrustedPayment'
import { useTimer } from '../customHooks/useTimer'
import { useDispatch } from 'react-redux'
import { addItem } from '../services/slice/CartSlice'
// import Flickity from 'react-flickity-component'

const LotteryInfo = () => {
    const { lid } = useParams()
    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const lottData = JSON.parse(window.localStorage.getItem("data"))
    const ticketInfo = lottData?.filter((item) => item._id === lid)

    // Accesing token
    const token = JSON.parse(window.localStorage.getItem("token"))

    // const listimage = ticketInfo[0]?.list_image
    const mainimage = ticketInfo[0]?.main_image
    const is_image = ticketInfo[0]?.is_image


    // IncAmount function
    const IncAmount = () => {
        if (amount < 5) {
            setAmount(amount + 1)
        }
    }
    // DecAmount function
    const DecAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    // Add ticket function
    const addTicket = (ticket) => {
        dispatch(addItem(ticket))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // console.log("Inside Render");
    }, [])
    startTimer(ticketInfo[0].time_left)
    // console.log("Outside render");


    // const flickityOptions = {
    //     initialIndex: 2
    // }

    return (
        <>
            {/* Product Info */}
            <div className="product_info_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="product_slider_images">

                                {/* Main image  */}
                                <div className="mainproduct_image img-fluid">
                                    {
                                        (is_image?.length) ? <img src={mainimage} alt="" className="img-fluid " />
                                            : <img src="/assets/img/imageunavailable.jpeg" alt="" className="img-fluid " />
                                    }
                                </div>

                                {/* <div className="carousel carousel-main" data-flickity='{"pageDots": false }'>
                                </div> */}
                                {/* Bottom slider  */}
                                {/* <div className="carousel carousel-nav"
                                    data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false,"prevNextButtons": true }'>
                                    {
                                        listimage?.map((curImg, index) => {
                                            return (
                                                <div className="carousel-cell" key={index}>
                                                    <img src={curImg[index]} alt='' />
                                                </div>
                                            )
                                        })
                                    }
                                </div> */}

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="product_information_area">
                                <div className="main_product_title">
                                    <h1>{ticketInfo[0]?.ticket_name}</h1>
                                </div>
                                <div className="tic_of_price">
                                    <h4 className="price_tic">Ticket Price :
                                        <span>{ticketInfo[0]?.currency}</span>
                                        <span>{ticketInfo[0]?.ticket_price}</span>
                                    </h4>
                                </div>
                                {/* Promo area */}
                                {
                                    ticketInfo[0]?.is_promo ?
                                        <div className="promo_area">
                                            <h3>Add a Promo</h3>
                                            <div className="promo_form">
                                                <form action="">
                                                    <div className="promo_input_wrapper">
                                                        <input type="text" placeholder="Enter Your Promo Code" />
                                                        <button className="promobtn">Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        : null
                                }

                                {/* Quantity area */}
                                <div className="quantity">
                                    <h3>Quantity</h3>
                                    <div className="col-md-4 mb-3">
                                        <div className="qty-container">
                                            <button className="qty-btn-minus btn-light" type="button" onClick={DecAmount}><i className="fa fa-minus"></i></button>
                                            <div className="quantity_place">
                                                {/* <input className='quantity_title' value={amount} /> */}
                                                <h1 className='quantity_title'>{amount}</h1>
                                            </div>
                                            <button className="qty-btn-plus btn-light" type="button" onClick={IncAmount}><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Add to cart buttton */}
                                <div className="btn_area mt-5">
                                    {
                                        token ?
                                            <button onClick={() => addTicket(ticketInfo[0])} className="btn2">Add To Cart</button>
                                            : <Link to="/login" className="btn2">Add To Cart</Link>
                                    }

                                    {
                                        token ? <Link to="/placeorder" className="btn2">Buy Ticket</Link>
                                            : <Link to="/login" className="btn2">Buy Ticket</Link>
                                    }
                                </div>

                                {/* Timer */}
                                {
                                    (timerDays && timerHours && timerMinutes && timerSeconds) >= 0 ?
                                        <div className="product_time">
                                            <div className="time_left_title">
                                                <h3 className=""><img src="/assets/img/time.png" alt="" />Timeleft</h3>
                                            </div>
                                            <div id="coundown" className="countdown product_timeleftwrap">
                                                <div className="product_timeleft">
                                                    <div id="days" className="time_left_style days">{timerDays}
                                                    </div>
                                                    <br /><span>Days</span>
                                                </div>
                                                <div className="product_timeleft">
                                                    <div id="hours" className="time_left_style hours">{timerHours}
                                                    </div>
                                                    <br /><span>Hours</span>
                                                </div>
                                                <div className="product_timeleft">
                                                    <div id="minutes" className="time_left_style minutes">{timerMinutes}
                                                    </div>
                                                    <br /><span>Mins</span>
                                                </div>
                                                <div className="product_timeleft">
                                                    <div id="seconds" className="time_left_style seconds">{timerSeconds}
                                                    </div>
                                                    <br /><span>Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        : <h4 className='text-dark my-5'>Ticket is unavailabe right now</h4>
                                }

                                {/* Ticket quantity Slider */}
                                <div className="ticket_sold">
                                    <div className="ticket_sold_title">
                                        <h3>
                                            <span><img src="/assets/img/9121436 1.png" alt="" /></span>
                                            Ticket Remains : <strong>{ticketInfo[0]?.ticket_quantity}</strong>
                                        </h3>
                                    </div>

                                    {/* Pogressbar area */}
                                    {/* <div className="progressarea">
                                        <div data-progress={ticketInfo[0]?.ticket_quantity}></div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="description_wrapper">
                            {/* Description Section */}
                            <div>
                                <div className="des_title">
                                    <h3>DESCRIPTION</h3>
                                </div>
                                <div className="description_item">
                                    <div className="describe_heading">
                                        <h4>{ticketInfo[0]?.ticket_name}</h4>
                                    </div>
                                    <p className="description_para">
                                        {ticketInfo[0]?.description}
                                    </p>
                                </div>
                                <hr />
                            </div>

                            {/* Key feature body section */}
                            <div className="description_item">
                                <div className="describe_heading">
                                    <h4>{ticketInfo[0]?.key_feature}:</h4>
                                </div>
                                <div>
                                    <div className="bullet_points">
                                        {
                                            ticketInfo[0]?.key_feature_body?.map((item, index) => {
                                                return (
                                                    <li key={index}><span><i className="fas fa-circle"></i></span>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            {
                                ticketInfo[0]?.features?.map((item, index) => {
                                    return (
                                        <div className="description_item" key={index}>
                                            <div className="describe_heading">
                                                <h4>{item?.key}</h4>
                                            </div>
                                            <p className="description_para">{item?.value}</p>
                                            {
                                                (item?.key && item?.value) ? <hr /> : null
                                            }

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Pay */}
            <TrustedPayment />
        </>
    )
}

export default LotteryInfo

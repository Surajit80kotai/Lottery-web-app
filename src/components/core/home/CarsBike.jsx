import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTimer } from '../../../customHooks/useTimer'


const CarsBike = ({ item, index }) => {
    const navigate = useNavigate()
    const { time_left, ticket_name, ticket_price, currency, ticket_quantity, discount_percentage, _id } = item
    const discountedPrice = (ticket_price - ((ticket_price * discount_percentage) / 100))
    // Accesing token
    const token = JSON.parse(window.localStorage.getItem("token"))
    // defining states timer
    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()

    useEffect(() => {
        // console.log("render");
    }, [])
    startTimer(time_left)

    return (
        <>
            {
                !index || index < 5 ?
                    <div className="col-md-4 product_item">
                        <div className="product_item_one">
                            <Link to={`/info/${_id}`}>
                                <div className="product_img">
                                    <div className="pro_img">
                                        <img src="assets/img/car1.jpg" alt="" className="img-fluid " />
                                    </div>
                                    <div className="label_area">
                                        <div className="label_tag_img">
                                            <img src="assets/img/label.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="label_content">
                                            <h3 className="currencysymbol">{currency}</h3>
                                            <h3 className="price">{ticket_price}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="product_content">
                                <Link to={`/info/${_id}`}>
                                    <div className="product_price">
                                        <h3><span>{currency}</span>{discountedPrice}</h3>
                                    </div>
                                    <div className="product_title">
                                        <h2>{ticket_name} </h2>
                                    </div>
                                    <h3 className="total_ticket">Total Ticket Available : {ticket_quantity}</h3>
                                    <div className="game_number">
                                        <h4>Game-1</h4>
                                    </div>
                                    <div className="time_left">
                                        <div className="time_left_title">
                                            <h3><img src="assets/img/992700 1.png" alt="" />Timeleft</h3>
                                        </div>
                                        <div id="coundown" className="countdown">
                                            <div className="timeleftarea">
                                                <div id="days" className=" days">{timerDays}
                                                </div>
                                                <br /><span>Days</span>
                                            </div>
                                            <div className="timeleftarea">
                                                <div id="hours" className=" hours">{timerHours}
                                                </div>
                                                <br /><span>Hours</span>
                                            </div>
                                            <div className="timeleftarea">
                                                <div id="minutes" className=" minutes">{timerMinutes}
                                                </div>
                                                <br /><span>Mins</span>
                                            </div>
                                            <div className="timeleftarea">
                                                <div id="seconds" className=" seconds">{timerSeconds}
                                                </div>
                                                <br /><span>Sec</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="product_action">
                                    <Link to={`/info/${_id}`} className="btn2">Info</Link>
                                    {
                                        token ? <Link to="" className="btn2">Buy Ticket</Link>
                                            : <Link to="/login" className="btn2">Buy Ticket</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-md-4 product_item">
                        <div className="viewall">
                            <div className="viewall_content ">
                                <h2>Best of <br /> Cars & Bikes</h2>
                                <button className="btn2 mt-2" onClick={() => navigate('/viewallcars')}>View All</button>
                            </div>

                            <img src="/assets/img/viewmorecard.png" alt="" className="img-fluid" />
                        </div>
                    </div>
            }

        </>
    )
}

export default CarsBike
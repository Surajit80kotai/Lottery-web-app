import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTimer } from '../../../customHooks/useTimer'
import { addItem } from '../../../services/slice/CartSlice'
import ViewAllCard from '../../common/viewAllCard/ViewAllCard'

const HomeLottery = ({ item, index }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { time_left, ticket_name, ticket_price, currency, ticket_quantity, discount_percentage, _id } = item
    const discountedPrice = Number((ticket_price - ((ticket_price * discount_percentage) / 100)))
    // console.log(item._id);
    // Accesing token
    const token = JSON.parse(window.localStorage.getItem("token"))
    // defining states timer
    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()
    // Add ticket function
    const addTicket = (ticket) => {
        dispatch(addItem(ticket))
    }

    useEffect(() => {
        // console.log("render");
    }, [])
    startTimer(Number(time_left))

    return (
        <>
            {
                !index || index < 5 ?
                    <div className="col-md-4 product_item">
                        <div className="product_item_one">
                            <Link to={`/info/${_id}`}>
                                <div className="product_img">
                                    <div className="pro_img">
                                        <img src="/assets/img/product1.jpg" alt="" className="img-fluid " />
                                    </div>
                                    <div className="label_area">
                                        <div className="label_tag_img">
                                            <img src="/assets/img/label.png" alt="" className="img-fluid" />
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
                                        <h2>{ticket_name}</h2>
                                    </div>
                                    <h3 className="total_ticket">Total Ticket Available : {ticket_quantity}</h3>
                                    <div className="game_number">
                                        <h4>Game-1</h4>
                                    </div>
                                    <div className="time_left">
                                        <div className="time_left_title">
                                            <h3><img src="/assets/img/992700 1.png" alt="" />Timeleft</h3>
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
                                        token ? <Link onClick={() => addTicket(item)} to="/placeorder" className="btn2">Buy Ticket</Link>
                                            : <Link to="/login" className="btn2">Buy Ticket</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <ViewAllCard navigate={navigate} text="Home" />
            }

        </>
    )
}

export default HomeLottery
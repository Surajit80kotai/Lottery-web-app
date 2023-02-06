import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import { useTimer } from '../../../customHooks/useTimer';

const Banner = ({ house, vehicle }) => {

    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()

    useEffect(() => {
        startTimer(1675708200000)
    }, [startTimer])


    return (
        <>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner_img">
                            <img src="assets/img/banner1.jpg" alt="baaner" className="img-fluid" />
                        </div>
                        <div className="banner_content">
                            {/* Condition for timer run-out */}

                            {
                                (timerDays && timerHours && timerMinutes && timerSeconds) >= 0 ?
                                    <div>
                                        <div className="time_counter">
                                            <h1 className="banner_title">{house[0]?.ticket_name}</h1>
                                            <h3>Timeleft</h3>
                                            <div id="coundown" className="countdown">
                                                <div className="one_time">
                                                    <div id="days" className="time days">
                                                        {timerDays}
                                                    </div>
                                                    <br /><span>Days</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="hours" className="time hours">
                                                        {timerHours}
                                                    </div>
                                                    <br /><span>Hours</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="minutes" className="time minutes">
                                                        {timerMinutes}
                                                    </div>
                                                    <br /><span>Mins</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="seconds" className="time seconds">
                                                        {timerSeconds}
                                                    </div>
                                                    <br /><span>Sec</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ticket_price">
                                            <h4>Ticket Price<span><h3 className="currencysymbol">{house[0]?.currency}</h3></span>{house[0]?.ticket_price}</h4>
                                        </div>
                                    </div>
                                    : <h1 className='text-white'>Ticket is unavailabe right now</h1>
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner_img">
                            <img src="assets/img/banner2.jpg" alt="baaner" className="img-fluid" />
                        </div>
                        <div className="banner_content">
                            {/* Condition for timer run-out */}

                            {
                                (timerDays && timerHours && timerMinutes && timerSeconds) >= 0 ?
                                    <div>
                                        <div className="time_counter">
                                            <h1 className="banner_title">{house[0]?.ticket_name}</h1>
                                            <h3>Timeleft</h3>
                                            <div id="coundown" className="countdown">
                                                <div className="one_time">
                                                    <div id="days" className="time days">
                                                        {timerDays}
                                                    </div>
                                                    <br /><span>Days</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="hours" className="time hours">
                                                        {timerHours}
                                                    </div>
                                                    <br /><span>Hours</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="minutes" className="time minutes">
                                                        {timerMinutes}
                                                    </div>
                                                    <br /><span>Mins</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="seconds" className="time seconds">
                                                        {timerSeconds}
                                                    </div>
                                                    <br /><span>Sec</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ticket_price">
                                            <h4>Ticket Price<span><h3 className="currencysymbol">{house[0]?.currency}</h3></span>{house[0]?.ticket_price}</h4>
                                        </div>
                                    </div>
                                    : <h1 className='text-white'>Ticket is unavailabe right now</h1>
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="banner_img">
                            <img src="assets/img/banner3.jpg" alt="baaner" className="img-fluid" />
                        </div>
                        <div className="banner_content">
                            {/* Condition for timer run-out */}

                            {
                                (timerDays && timerHours && timerMinutes && timerSeconds) >= 0 ?
                                    <div>
                                        <div className="time_counter">
                                            <h1 className="banner_title">{house[0]?.ticket_name}</h1>
                                            <h3>Timeleft</h3>
                                            <div id="coundown" className="countdown">
                                                <div className="one_time">
                                                    <div id="days" className="time days">
                                                        {timerDays}
                                                    </div>
                                                    <br /><span>Days</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="hours" className="time hours">
                                                        {timerHours}
                                                    </div>
                                                    <br /><span>Hours</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="minutes" className="time minutes">
                                                        {timerMinutes}
                                                    </div>
                                                    <br /><span>Mins</span>
                                                </div>
                                                <div className="one_time">
                                                    <div id="seconds" className="time seconds">
                                                        {timerSeconds}
                                                    </div>
                                                    <br /><span>Sec</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ticket_price">
                                            <h4>Ticket Price<span><h3 className="currencysymbol">{house[0]?.currency}</h3></span>{house[0]?.ticket_price}</h4>
                                        </div>
                                    </div>
                                    : <h1 className='text-white'>Ticket is unavailabe right now</h1>
                            }
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner
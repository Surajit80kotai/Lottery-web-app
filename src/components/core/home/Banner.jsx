import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { useTimer } from '../../../customHooks/useTimer';

const Banner = ({ house, vehicle }) => {

    const [timerDays, timerHours, timerMinutes, timerSeconds, startTimer] = useTimer()

    useEffect(() => {
        startTimer(1676399400000)
    }, [startTimer])


    // Slider Settings
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className="banner_wrapper">
                <div className="banslider">
                    <Slider {...settings}>
                        <div className="banner_item">
                            <div className="banner_img">
                                <img src="assets/img/banner1.jpg" alt="baaner" className="img-fluid" />
                            </div>
                            <div className="banner_content">
                                <h1 className="banner_title">{house[0]?.ticket_name}</h1>
                                <div className="time_counter">
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
                        </div>
                        <div className="banner_item">
                            <div className="banner_img">
                                <img src="assets/img/banner2.jpg" alt="baaner" className="img-fluid" />
                            </div>
                            <div className="banner_content">
                                <h1 className="banner_title">{vehicle[0]?.ticket_name}</h1>
                                <div className="time_counter">
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
                                    <h4>Ticket Price<span><h3 className="currencysymbol">{vehicle[0]?.currency}</h3></span>{vehicle[0]?.ticket_price}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="banner_item">
                            <div className="banner_img">
                                <img src="assets/img/banner3.jpg" alt="baaner" className="img-fluid" />
                            </div>
                            <div className="banner_content">
                                <h1 className="banner_title">{house[0]?.ticket_name}</h1>
                                <div className="time_counter">
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
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Banner
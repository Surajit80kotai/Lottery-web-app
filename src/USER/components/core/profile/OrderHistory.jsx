import React from 'react'

const OrderHistory = () => {
    return (
        <>
            <div className="content_wrapper">
                
                {/* order history  */}
                <div className="container ">
                    <div className="order_histry_wrapper">
                        {/* order his item  */}
                        <div className="orderhistroy_item">
                            <div className="product_history_img">
                                <img src="/assets/img/cos3.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="info_item">
                                <div className="info_pro_title">
                                    <h4>Dual Action Exfoliator</h4>
                                </div>
                                <div className="num_of_tick">
                                    <h4>Number Of Ticket : <span>232</span></h4>
                                </div>
                                <div className="time_left">

                                    <div id="coundown" className="countdown">
                                        <div className="timeleftarea">
                                            <div id="days" className=" days">000
                                            </div>
                                            <br /><span>Days</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="hours" className=" hours">000
                                            </div>
                                            <br /><span>Hours</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="minutes" className=" minutes">000
                                            </div>
                                            <br /><span>Mins</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="seconds" className=" seconds">000
                                            </div>
                                            <br /><span>Sec</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info_item">
                                <h3 className="dateofresult"><span><img src="/assets/img/7204809 (1) 3.png" alt="" /></span>Date Of Result
                                    :<span>23/12/22</span> </h3>
                            </div>
                            <div className="wining_status">
                                <h4><span><img src="/assets/img/3135783 1.png" alt="" /></span>Won</h4>
                            </div>
                        </div>
                        <div className="orderhistroy_item">
                            <div className="product_history_img">
                                <img src="/assets/img/cos3.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="info_item">
                                <div className="info_pro_title">
                                    <h4>Dual Action Exfoliator</h4>
                                </div>
                                <div className="num_of_tick">
                                    <h4>Number Of Ticket : <span>232</span></h4>
                                </div>
                                <div className="time_left">

                                    <div id="coundown" className="countdown">
                                        <div className="timeleftarea">
                                            <div id="days" className=" days">000
                                            </div>
                                            <br /><span>Days</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="hours" className=" hours">000
                                            </div>
                                            <br /><span>Hours</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="minutes" className=" minutes">000
                                            </div>
                                            <br /><span>Mins</span>
                                        </div>
                                        <div className="timeleftarea">
                                            <div id="seconds" className=" seconds">000
                                            </div>
                                            <br /><span>Sec</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info_item">
                                <h3 className="dateofresult"><span><img src="/assets/img/7204809 (1) 3.png" alt="" /></span>Date Of Result
                                    :<span>23/12/22</span> </h3>
                            </div>
                            <div className="wining_status">
                                <h4><span><img src="/assets/img/3135783 1 (1).png" alt="" /></span>Lost</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderHistory
import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <>
            <div className="content_wrapper">
                <div className="container">
                    <div className="dashboard_banner">
                        {/* <img src="/assets/img/dash.jpg" alt=""/> */}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Congratulation John !</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4> $42.8k</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/9206435 1.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Total Winning</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4>42</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/winning.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="one_total_box">
                                <div className="content_total">
                                    <div className="one_total_title">
                                        <h3>Total Profit</h3>
                                    </div>
                                    <p>Best Play of the month</p>
                                    <div className="total_amount">
                                        <h4> $42.8k</h4>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="" className="btn2">View all</Link>
                                    </div>
                                </div>
                                <div className="total_icon">
                                    <img src="/assets/img/9206435 1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard
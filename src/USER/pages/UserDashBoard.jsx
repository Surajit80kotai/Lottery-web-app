import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashBoard from '../components/core/userDashboard/DashBoard'
import OrderHistory from '../components/core/userDashboard/OrderHistory'

const UserDashBoard = () => {
    const [pageName, setPageName] = useState("dashboard")

    return (
        <>
            <main>
                <div className="sidebar_wrapper">
                    {/* Left Side */}
                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">

                        <div className="menu-inner-shadow"></div>

                        <ul className="menu-inner py-1">

                            {/*  Dashboard  */}
                            <li className="menu-item active">
                                <Link onClick={() => setPageName("dashboard")} to="#!" className="menu-link">
                                    <i className="menu-icon tf-icons fas fa-tachometer-alt"></i>
                                    <div data-i18n="Analytics">Dashboard</div>
                                </Link>
                            </li>

                            {/* Bonus */}
                            <li className="menu-item ">
                                <Link onClick={() => setPageName("bonus")} to="#!" className="menu-link">
                                    <i className="menu-icon fas fa-gift"></i>
                                    <div data-i18n="Analytics">Bonus</div>
                                </Link>
                            </li>

                            {/* Games */}
                            <li className="menu-item ">
                                <Link onClick={() => setPageName("games")} to="#!" className="menu-link">
                                    <i className="menu-icon fas fa-puzzle-piece"></i>
                                    <div data-i18n="Analytics">Games</div>
                                </Link>
                            </li>

                            {/* Order history */}
                            <li className="menu-item ">
                                <Link onClick={() => setPageName("orderhistory")} to="#!" className="menu-link">
                                    <i className="menu-icon fas fa-history"></i>
                                    <div data-i18n="Analytics">Order History</div>
                                </Link>
                            </li>
                        </ul>
                        <hr />

                        {/* Accout balance dropdown menu */}
                        <div className="acount_balns_wraper">
                            <input type="checkbox" id="drop-5" hidden />
                            <label className="dropHeader dropHeader-4 dropacount" htmlFor="drop-5"><span><img src="/assets/img/2355715 1.png" alt="" /></span> Acount Balance <span className="iocn"><i className="fas fa-sort-down"></i></span> </label>
                            <div className="acountcheck list-5">
                                <div className="acount_bls_check_box">
                                    <img src="/assets/img/114910 1.png" alt="" className="img-fluid" />
                                    <h3 className="amonut_blans">
                                        <span>€</span>
                                        52365
                                    </h3>
                                    <p>Total Banlance</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Side */}
                    {/* Dashboard */}
                    {pageName === "dashboard" ? <DashBoard /> : null}

                    {/* Order History */}
                    {pageName === "orderhistory" ? <OrderHistory /> : null}
                </div>
            </main>
        </>
    )
}

export default UserDashBoard
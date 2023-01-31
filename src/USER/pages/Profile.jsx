import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashBoard from '../components/core/profile/DashBoard'
import OrderHistory from '../components/core/profile/OrderHistory'
import Wallet from '../components/core/profile/Wallet'

const Profile = () => {
    const [pageName, setPageName] = useState("dashboard")
    window.scrollTo(0, 0)

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

                            {/* Wallet */}
                            <li className="menu-item ">
                                <Link onClick={() => setPageName("wallet")} to="#!" className="menu-link">
                                    <i className="menu-icon fas fa-wallet"></i>
                                    <div data-i18n="Analytics">Wallet</div>
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
                    </aside>

                    {/* Right Side */}
                    {/* Dashboard */}
                    {pageName === "dashboard" ? <DashBoard /> : null}

                    {/* Wallet */}
                    {pageName === "wallet" ? <Wallet /> : null}

                    {/* Order History */}
                    {pageName === "orderhistory" ? <OrderHistory /> : null}
                </div>
            </main>
        </>
    )
}

export default Profile
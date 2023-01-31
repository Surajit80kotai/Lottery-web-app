import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBalance } from '../../../services/slice/UserSlice';

const Wallet = () => {
    const [amount, setAmount] = useState()
    // const [checked, setChecked] = useState("option1")
    const dispatch = useDispatch()
    const { balance } = useSelector((state) => state.userslice)

    // const user = JSON.parse(window.localStorage.getItem("user"))
    // console.log(user)


    useEffect(() => {
        dispatch(getBalance())
    }, [dispatch])

    return (
        <>
            <div className="content_wrapper">
                <div className="paymentwallet_bg">
                    <h1>Check Your Current Balance</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="payment_area">
                                <div className="paymentwallet_top_header">
                                    <div className="pay_title">
                                        <div className="wallet_icon">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                        <span>Payment Wallet</span>
                                    </div>
                                    <div className="total_balns">
                                        <span>Total Balance</span>
                                        <h5 className="total_amount">$ {balance?.balance}</h5>
                                    </div>
                                </div>

                                {/* Add money input */}
                                <div className="payment_area_body">
                                    <h4>ADD MONEY TO WALLET</h4>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="payment_input">
                                                    <div className="currency_icon">
                                                        <p>$</p>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="payinput"
                                                        id="amount"
                                                        name="amount"
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter amount"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="addmoney" data-bs-toggle="modal" data-bs-target="#exampleModal">Add
                                                    Money</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                {/* transaction histrory */}
                                <h3 className="tranhis">Transaction History</h3>
                                <div className="transaction_area">

                                    <table className="table mt-4">
                                        <thead className="table_head sticky-top ">
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>2 Jan 2023, 11.30AM</td>
                                                <td>€ 230</td>
                                                <td className="status"><i className="fas fa-check-circle"></i> Success</td>
                                            </tr>
                                            <tr>

                                                <td>8 Jan 2023, 1.30PM</td>
                                                <td>€ 230</td>
                                                <td className="status"><i className="fas fa-check-circle"></i> Success</td>
                                            </tr>
                                            <tr>

                                                <td>10 Feb 2023, 12.00PM</td>
                                                <td>€ 8230</td>
                                                <td className="failed"><i className="fas fa-exclamation-triangle"></i> Failed</td>
                                            </tr>
                                            <tr>

                                                <td>25 Feb 2023, 11.30AM</td>
                                                <td>€ 3030</td>
                                                <td className="status"><i className="fas fa-check-circle"></i> Success</td>
                                            </tr>
                                            <tr>

                                                <td>28 Feb 2023, 8.00PM</td>
                                                <td>€ 8230</td>
                                                <td className="failed"><i className="fas fa-exclamation-triangle"></i> Failed</td>
                                            </tr>
                                            <tr>

                                                <td>28 Feb 2023, 8.00PM</td>
                                                <td>€ 8230</td>
                                                <td className="failed"><i className="fas fa-exclamation-triangle"></i> Failed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/*  Modal payment */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Add Money to Wallet</h3>
                                <h4>${amount}</h4>
                            </div>

                            <div className="modal-body">
                                <h4 className="option_title">Payment Option</h4>
                                <div className="payment_section">

                                    {/* Pay with cinet Pay */}
                                    <div className="payment_item">
                                        <input
                                            type="radio"
                                            id="control_01"
                                            name="select"
                                            value="option1"

                                        />
                                        <label htmlFor="control_01">
                                            <div className="pay_icon">
                                                <img src="/assets/img/pay1.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <p>Pay with cinet Pay</p>
                                        </label>

                                    </div>

                                    {/* Pay with Master Card */}
                                    <div className="payment_item">
                                        <input
                                            type="radio"
                                            id="control_02"
                                            name="select"
                                            value="option2"
                                        />
                                        <label htmlFor="control_02">
                                            <div className="pay_icon">
                                                <img src="/assets/img/pay2.png" alt="" className="img-fluid" />
                                            </div>
                                            <p>Pay with Master Card</p>
                                        </label>
                                    </div>

                                    {/* Pay with Paypal */}
                                    <div className="payment_item">
                                        <input
                                            type="radio"
                                            id="control_03"
                                            name="select"
                                            value="option3"
                                        />
                                        <label htmlFor="control_03">
                                            <div className="pay_icon">
                                                <img src="/assets/img/pay3.png" alt="" className="img-fluid" />
                                            </div>
                                            <p>Pay with Paypal</p>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet
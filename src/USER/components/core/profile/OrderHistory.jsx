import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userOrderHistory } from '../../../services/slice/UserSlice'

const OrderHistory = () => {
    const { order_history_data } = useSelector(state => state.userslice)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(userOrderHistory())
    }, [dispatch])

    return (
        <>
            <div className="content_wrapper">

                {/* order history  */}
                <div className="container ">
                    <div className="order_histry_wrapper">
                        {/* order his item  */}
                        {
                            order_history_data?.map((item) => {
                                return (
                                    <div className="orderhistroy_item" key={item?._id}>
                                        <div className="product_history_img">
                                            <img src={item?.image_link} alt="" className="img-fluid" />
                                        </div>
                                        <div className="info_item">
                                            <div className="info_pro_title">
                                                <h4>{item?.ticket_name}</h4>
                                            </div>
                                            <div className="num_of_tick">
                                                <h4>Ticket Purchased: <span>{item?.quantity}</span></h4>
                                            </div>

                                            {/* <div className="time_left">
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
                                            </div> */}

                                        </div>
                                        <div className="info_item">
                                            <h3 className="dateofresult">
                                                <span><img src="/assets/img/7204809 (1) 3.png" alt="" /></span>
                                                Date Of Result :
                                                <span>
                                                    {new Date(item?.time_left).toLocaleString('en-US', {
                                                        month: 'short',
                                                        day: '2-digit',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="wining_status">
                                            <h4><span><img src="/assets/img/3135783 1.png" alt="" /></span>Result comming soon</h4>
                                        </div>
                                    </div>
                                )
                            }).reverse()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderHistory
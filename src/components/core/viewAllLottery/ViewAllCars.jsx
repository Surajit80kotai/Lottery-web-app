import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLottery } from '../../../services/slice/LotterySlice'
import TrustedPayment from '../../common/trustedPayment/TrustedPayment'
import CarsBike from '../home/CarsBike'

const ViewAllCars = () => {
    const { fetch_lott_data } = useSelector((state) => state.lotteryslice)
    const dispatch = useDispatch()

    // Filtering category from data
    const vehicle = fetch_lott_data?.filter((item) => item.category === "vehicle")

    useEffect(() => {
        dispatch(fetchLottery())
    }, [dispatch])

    return (
        <>
            <div className="prodcut_wrapper">
                <div className="one_row">

                    <div className="container">
                        <div className="row ">

                            {/* Home Lottery */}
                            <div className="first_row_title">
                                <h2>Cars & Bikes</h2>
                            </div>
                            {
                                vehicle.map((item) => {
                                    return <CarsBike
                                        item={item}
                                        key={item._id}
                                    />
                                })
                            }
                            {/* trused payment */}
                            <TrustedPayment />

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ViewAllCars
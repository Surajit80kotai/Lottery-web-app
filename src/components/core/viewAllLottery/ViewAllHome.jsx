import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLottery } from '../../../services/slice/LotterySlice'
import TrustedPayment from '../../common/trustedPayment/TrustedPayment'
import HomeLottery from '../home/HomeLottery'

const ViewAllHome = () => {
    const { fetch_lott_data } = useSelector((state) => state.lotteryslice)
    const dispatch = useDispatch()

    // Filtering category from data
    const house = fetch_lott_data?.filter((item) => item.category === "house")

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
                                <h2>Home Lottery</h2>
                            </div>
                            {
                                house.map((item) => {
                                    return <HomeLottery
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

export default ViewAllHome
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/core/home/Banner'
import CarsBike from '../components/core/home/CarsBike'
import ComputersPhones from '../components/core/home/ComputersPhones'
import Cosmetics from '../components/core/home/Cosmetics'
import HomeLottery from '../components/core/home/HomeLottery'
import StudyTravel from '../components/core/home/StudyTravel'
import TrustedPayment from '../components/common/trustedPayment/TrustedPayment'
import { fetchLottery } from '../services/slice/LotterySlice'


const Home = () => {
    const { fetch_lott_data } = useSelector((state) => state.lotteryslice)
    const dispatch = useDispatch()

    // Filtering category from data
    const house = fetch_lott_data?.filter((item) => item.category === "house")
    const vehicle = fetch_lott_data?.filter((item) => item.category === "vehicle")
    // console.log(house);


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchLottery())
    }, [dispatch])


    return (
        <>
            {/* Banner */}
            <Banner
                house={house}
                vehicle={vehicle}
            />

            {/* Product Area */}
            <div className="prodcut_wrapper">
                <div className="one_row">

                    <div className="container">
                        <div className="row ">

                            {/* Home Lottery */}
                            <div className="first_row_title">
                                <h2>Home Lottery</h2>
                            </div>
                            {
                                house.map((item, index) => {
                                    return <HomeLottery
                                        item={item}
                                        key={item._id}
                                        index={index}
                                    />
                                }).slice(0, 6)
                            }

                            {/* divider */}
                            <div className="divider"></div>

                            {/* <!-- car bike --> */}
                            <div className="first_row_title">
                                <h2>Cars & Bikes</h2>
                            </div>
                            {
                                vehicle.map((item, index) => {
                                    return <CarsBike
                                        item={item}
                                        key={item._id}
                                        index={index}
                                    />
                                }).slice(0, 6)
                            }

                            {/* <!-- stydy travel --> */}
                            <StudyTravel />

                            {/* <!-- computers & phones --> */}
                            <ComputersPhones />

                            {/* <!-- cosmetic --> */}
                            <Cosmetics />

                            {/* <div className="text-center ">
                                <button className="btn3">Load More</button>
                            </div> */}

                            {/* trused payment */}
                            <TrustedPayment />

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home

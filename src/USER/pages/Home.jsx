import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/core/home/Banner'
import CarsBike from '../components/core/home/CarsBike'
import ComputersPhones from '../components/core/home/ComputersPhones'
import Cosmetics from '../components/core/home/Cosmetics'
import HomeLottery from '../components/core/home/HomeLottery'
import StudyTravel from '../components/core/home/StudyTravel'
import TrustedPayment from '../components/common/trustedPayment/TrustedPayment'
import { fetchCategory, fetchLottery } from '../services/slice/LotterySlice'


const Home = () => {
    const { fetch_lott_data, category_data } = useSelector((state) => state.lotteryslice)
    const dispatch = useDispatch()

    // Getting category_name & category_id
    const categoryObj = category_data?.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.name]: cur._id
        }
    }, {});

    // Filtering category from data
    const house = fetch_lott_data?.filter((item) => item.category === categoryObj["house"])
    const vehicle = fetch_lott_data?.filter((item) => item.category === categoryObj["Cars & Bike"])
    const cosmetics = fetch_lott_data?.filter((item) => item.category === categoryObj["Cosmetic products"])
    const study_travel = fetch_lott_data?.filter((item) => item.category === categoryObj["Study abroad or travel abroad"])
    const comp_phn = fetch_lott_data?.filter((item) => item.category === categoryObj["computers and phones"])


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchLottery())
        dispatch(fetchCategory())
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

                            {/* divider */}
                            <div className="divider"></div>
                            {/* <!-- stydy travel --> */}
                            <div className="first_row_title">
                                <h2>Study & Travle</h2>
                            </div>
                            {
                                study_travel.map((item, index) => {
                                    return <StudyTravel
                                        item={item}
                                        key={item._id}
                                        index={index}
                                    />
                                }).slice(0, 6)
                            }

                            {/* divider */}
                            <div className="divider"></div>

                            {/* <!-- computers & phones --> */}
                            <div className="first_row_title">
                                <h2>Computer & Phones</h2>
                            </div>
                            {
                                comp_phn.map((item, index) => {
                                    return <ComputersPhones
                                        item={item}
                                        key={item._id}
                                        index={index}
                                    />
                                }).slice(0, 6)
                            }

                            {/* divider */}
                            <div className="divider"></div>

                            {/* <!-- cosmetic --> */}
                            <div className="first_row_title">
                                <h2>Cosmetics</h2>
                            </div>
                            {
                                cosmetics.map((item, index) => {
                                    return <Cosmetics
                                        item={item}
                                        key={item._id}
                                        index={index}
                                    />
                                }).slice(0, 6)
                            }

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

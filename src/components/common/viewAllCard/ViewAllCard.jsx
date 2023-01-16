import React from 'react'

const ViewAllCard = ({navigate , text}) => {
    return (
        <>
            <div className="col-md-4 product_item">
                <div className="viewall">
                    <div className="viewall_content ">
                        <h2>Best of <br /> {text}</h2>
                        <button className="btn2 mt-2" onClick={() => navigate('/viewallhome')}>View All</button>
                    </div>

                    <img src="/assets/img/viewmorecard.png" alt="" className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default ViewAllCard
import React from 'react'

const PreLoader = () => {

    // setTimeout(function () {
    //     document.querySelector(".preloader").style.display = "none";
    //     document.querySelector(".body_sec").style.opacity = "1";
    // }, 2000);

    return (
        <>
            {/* <div className="body_sec">
                <div className="preloader_area">
                    <div className="preloader"></div>
                </div>
            </div> */}
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border mt-5" role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default PreLoader

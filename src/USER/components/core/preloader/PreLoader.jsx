import React from 'react'

const PreLoader = () => {

    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".body_sec").style.opacity = "1";
    }, 2000);

    return (
        <>
            <div class="body_sec">
                <div class="preloader_area">
                    <div class="preloader"></div>
                </div>
            </div>
        </>
    )
}

export default PreLoader

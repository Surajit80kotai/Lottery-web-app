import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const token = JSON.parse(window.localStorage.getItem('token'))
    const social_user = JSON.parse(window.localStorage.getItem("social_user"))
    return (
        <>
            {
                token || social_user ? <Outlet /> : <Navigate to='/' />
            }
        </>
    )
}

export default PrivateRoute
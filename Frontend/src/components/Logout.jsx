import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import { Navigate, redirect } from 'react-router-dom'
import Home from './home/Home'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
   
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
                

            })
            sessionStorage.removeItem("Users")
            sessionStorage.removeItem("token")
            toast.success("Logout Successfully")
            window.location.reload();
            return <Navigate to="/"  />;
          

        } catch (error) {
            toast.error("Error:" + err.message)
        }

    }
    return (
        <>
            <div>
                <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Logout
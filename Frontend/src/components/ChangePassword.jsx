import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function ChangePassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const navigate = useNavigate();
    const email = localStorage.getItem('userEmail');

    const modalRef = useRef(null);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit =data => console.log(data);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

    const openLogin = () => {
        closeModal(); // Close the login modal
        const loginModal = document.getElementById("my_modal_3"); // Use the ID of the registration modal
        if (loginModal) {
            loginModal.showModal(); // Open the registration modal
        }
    };




    const onsubmit = async (data) => {
        // Validate that passwords match
        console.log(data)
        if (data.password !== data.confirmpassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4001/auth/change-password', {
                email: email, // Replace with the actual email from your context or state
                newPassword: data.password,
            });

            if (response.data.success) {
                toast.success('Password changed successfully!');
                console.log("successfully change ho gya hai")
                navigate('/'); // Redirect to home or any other page after success
            } else {
                toast.error('Failed to change password');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while changing the password');
        }
    };

    return (
        <>
            <dialog id="my_modal_6" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onsubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button type='button' onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>

                        <h3 className="font-bold text-lg dark:text-black">Change Password</h3>



                        {(
                            <div className='mt-4 space-y-2 dark:text-black'>
                                <span>

                                    New Password
                                </span>
                                <br />
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"} // Toggle between text and password
                                        placeholder='Enter your password'
                                        className='w-80 px-3 py-1 border rounded-md outline-none text-black pr-10' // Add padding to the right for the icon
                                        {...register("password", { required: true })}
                                    />
                                    <span className="absolute right-3 top-2 cursor-pointer">
                                        {passwordVisible ? (
                                            <AiFillEyeInvisible size={20} onClick={() => setPasswordVisible(false)} />
                                        ) : (
                                            <AiFillEye size={20} onClick={() => setPasswordVisible(true)} />
                                        )}
                                    </span>
                                </div>
                            </div>

                        )}
                        <div className='mt-4 space-y-2 dark:text-black'>
                            <span>

                                Confirm Password
                            </span>
                            <br />
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"} // Toggle between text and password
                                    placeholder='Enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none text-black pr-10' // Add padding to the right for the icon
                                    {...register("password", { required: true })}
                                />
                                <span className="absolute right-3 top-2 cursor-pointer">
                                    {passwordVisible ? (
                                        <AiFillEyeInvisible size={20} onClick={() => setPasswordVisible(false)} />
                                    ) : (
                                        <AiFillEye size={20} onClick={() => setPasswordVisible(true)} />
                                    )}
                                </span>
                            </div>

                        </div>

                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit

                            </button>
                            <p className='text-xl  dark:text-black'>
                                Have Account?<button className=' text-blue-500 cursor-pointer' onClick={openLogin}>Login</button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ChangePassword
import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function ForgetPassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [otpSent, setOtpSent] = useState(false); // To check if OTP has been sent
    const [otp, setOtp] = useState(new Array(6).fill('')); // For handling OTP input


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


    // Function to handle form submission
    const onsubmit = async (data) => {
        if (!otpSent) {
            try {
                const response = await axios.post('http://localhost:4001/auth/send-otp', { email: data.email });
                console.log("Full Response: ", response);
                if (response.data.success) {
                    console.log(response.data.success)
                    setOtpSent(true);
                    console.log("successfully otp send hoogyi hai")
                    toast.success('Successfully Send');
                }
            } catch (error) {
                console.log(error)
                toast.error('Failed to send OTP')
            }
        }
        else {
            // Verify OTP
            const otpString = otp.join('');
            console.log(data.email + otpString) // Join the OTP array into a single string
            try {
                const response = await axios.post('http://localhost:4001/auth/verify-otp', {
                    email: data.email, // Pass the email to verify OTP
                    otp: otpString


                });
                console.log(response.data)
                if (response.data.success) {
                    console.log("succesfully otp match hogyi hai")
                    toast.success('OTP verified successfully!');
                    localStorage.setItem('userEmail', data.email);
                   // navigate("/ChangePassword")
                   closeModal(); // Close the login modal
                   const changePasswordModal = document.getElementById("my_modal_6"); // Use the ID of the registration modal
                   if (changePasswordModal) {
                    changePasswordModal.showModal(); // Open the registration modal
                   }
                } else {
                    toast.error('Invalid OTP. Please try again.');
                }
            } catch (error) {
                console.log(error);
                toast.error('Error verifying OTP');
            }
        }

    };

    // Function to handle OTP input and auto-focus shift
    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
    
        // Handle key down for backspace
        if (e.key === 'Backspace') {
            if (value.length === 0 && index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        } else if (value.length === 1) {
            newOtp[index] = value;
            setOtp(newOtp);
    
            // Automatically move to the next input field if value is entered
            if (index < 5) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        } else {
            newOtp[index] = '';
            setOtp(newOtp);
        }
    };
    return (
        <>
            <dialog id="my_modal_5" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onsubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                       <button type='button'  onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>

                        <h3 className="font-bold text-lg dark:text-black">Forget Password</h3>


                        {/* Email input */}
                        {!otpSent ? (
                            <div className='mt-4 space-y-2 dark:text-black'>
                                <span>
                                    <h5 className=" text-sm text-gray-500  dark:text-black m-3">Enter the email address associated with your BookStore account.</h5>
                                    Email
                                </span>
                                <br />
                                <input type="email" placeholder='Enter your email ' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black ' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        ) : (
                            <div className='mt-4 space-y-2 dark:text-black'>
                                <h5 className="text-sm text-gray-500 dark:text-black m-3">Enter the 6-digit OTP sent to your email.</h5>
                                <div className='flex justify-between'>
                                    {otp.map((value, index) => (
                                        <input
                                            key={index}
                                            id={`otp-input-${index}`}
                                            type="text"
                                            maxLength="1"
                                            className='w-12 px-2 py-1 border rounded-md text-center text-xl outline-none border-black'
                                            value={value}
                                            onChange={(e) => handleOtpChange(e, index)}
                                            onKeyDown={(e) => handleOtpChange(e, index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                {!otpSent ? 'Send OTP' : 'Verify OTP'}
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
    );
}

export default ForgetPassword
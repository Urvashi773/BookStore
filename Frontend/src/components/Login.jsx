import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Registration from "./Registration";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function Login() {
    const modalRef = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const onSubmit = async (data) => {
        const userInfo = {

            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Successfully LoggedIn');
                    const expirationTime = new Date().getTime() + 3600000;
                    sessionStorage.setItem("token", res.data.token);
                    sessionStorage.setItem("Users", JSON.stringify(res.data.user));
                    window.location.reload();
                }


            }).catch((err) => {
                if (err.response) {
                    console.log(err)

                    toast.error("Error:" + err.response.data.message);
                }


            })
    }

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }
    const openRegistration = () => {
        closeModal(); // Close the login modal
        console.log("in open registration method")
        const registrationModal = document.getElementById("my_modal_4"); // Use the ID of the registration modal
        if (registrationModal) {
            registrationModal.showModal(); // Open the registration modal
        }
    };
    const openForgetPassword = () => {
        closeModal(); // Close the login modal
        console.log("in open forget password method")
        const forgetPasswordModal = document.getElementById("my_modal_5"); // Use the ID of the registration modal
        if (forgetPasswordModal) {
            forgetPasswordModal.showModal(); // Open the registration modal
        }
        else {
            console.log("ForgetPassword modal not found.");
        }
    };


    return (
        <>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>

                        <h3 className="font-bold text-lg dark:text-black">Login</h3>
                        <div className='mt-4 space-y-2 dark:text-black' >
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'  >This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2 dark:text-black'>
                            <span>Password</span>
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
                                <div className='text-blue-400 mt-2'><span onClick={openForgetPassword} className=' bg-white text-blue-500 border-none shadow-0 cursor-pointer'>Forget Password?</span> </div>
                            </div>
                            </div>
                            <br/>
                       
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p className=' dark:text-black'>
                                Not Registered?<span onClick={openRegistration} className=' bg-white text-blue-500 border-none shadow-0 cursor-pointer'>Sign Up</span>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login;

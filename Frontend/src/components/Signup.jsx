import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Successfully SignedUp');
                    localStorage.setItem("Users",JSON.stringify(res.data.user));
                }

            }).catch((err) => {
                if(err.response){
                    console.log(err)
                    alert("Error:"+ err.response.data.message)
                    toast.error("Error:"+ err.response.data.message);
                }
                

            })

    };


    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className='w-[600px]'>
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button></Link>

                            <h3 className="font-bold text-lg dark:text-black">SignUp</h3>
                            <div className='mt-4 space-y-2 dark:text-black' >
                                <span>
                                    Name
                                </span>
                                <br />
                                <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'  >This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2 dark:text-black' >
                                <span>
                                    Email
                                </span>
                                <br />
                                <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'  >This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2 dark:text-black' >
                                <span>
                                    Password
                                </span>
                                <br />
                                <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'  >This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>SignUp</button>
                                <p className='text-xl'>
                                    Have Account?<button className=' text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
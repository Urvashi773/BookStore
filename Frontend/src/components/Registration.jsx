
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';

function Registration() {

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
                    closeModal(); 
                    window.location.reload();
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
            <dialog id="my_modal_4" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>

                        <h3 className="font-bold text-lg dark:text-black">Sign Up</h3>
                        <div className='mt-4 space-y-2 dark:text-black' >
                            <span>FullName</span>
                            <br />
                            <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none text-black' 
                                {...register("fullname", { required: true })} />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500'  >This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2 dark:text-black' >
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none text-black' 
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'  >This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2 dark:text-black' >
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'  >This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                            <p className=' dark:text-black'>
                                Already Registered?<button type="button" onClick={openLogin} className=' bg-white text-blue-500 border-none shadow-none cursor-pointer'>Login</button>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        
 </>
  )
}

export default Registration
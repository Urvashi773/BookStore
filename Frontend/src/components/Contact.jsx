import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =async (data) => {
        const mailInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        await axios.post("http://localhost:4001/email/sendmail", mailInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Successfully Send');
                    // localStorage.setItem("Users",JSON.stringify(res.data.user));
                    
                }

            }).catch((err) => {
                if(err.response){
                    console.log(err)
                    // alert("Error:"+ err.response.data.message)
                    toast.error("Error:"+ err.response.data.message);
                }
                

            })

    };

  return (
   <>
   <Navbar />
    <div className='min-h-screen'>
    <div className='flex h-screen items-center justify-center'>
    <div className='w-[600px]'>
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button></Link>
    
    <h3 className="font-bold text-lg dark:text-black">Contact Us</h3>
   <div className='mt-4 space-y-2 dark:text-black' >
    <span>
        Name
    </span>
    <br/>
    <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("name", { required: true })}/>
    <br/>
    {errors.name && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='mt-4 space-y-2 dark:text-black' >
    <span>
        Email
    </span>
    <br/>
    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='mt-4 space-y-2 dark:text-black' >
    <span>
        Message
    </span>
    <br/>
    <input type="text" placeholder='Type Your Message' className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black '  {...register("message", { required: true})}/>
    <br/>
    {errors.message && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
    
   
    <button className=' bg-blue-500 text-white cursor-pointer h-10 w-20 rounded-xl hover:bg-blue-700 duration-200' >Submit</button>
                            
    
   </div>
   </form>
  </div>
</div>
</div>
    </div>
    <Footer/>
   </>
  )
}

export default Contact
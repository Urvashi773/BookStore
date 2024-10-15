import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
   <>
   <Navbar />
    <div className='min-h-screen'>
    <div className='flex h-screen items-center justify-center'>
    <div className='w-[600px]'>
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"}><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    
    <h3 className="font-bold text-lg">Contact Us</h3>
   <div className='mt-4 space-y-2' >
    <span>
        Name
    </span>
    <br/>
    <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none '  {...register("name", { required: true })}/>
    <br/>
    {errors.name && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='mt-4 space-y-2' >
    <span>
        Email
    </span>
    <br/>
    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none '  {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='mt-4 space-y-2' >
    <span>
        Message
    </span>
    <br/>
    <input type="password" placeholder='Type Your Message' className='w-80 px-3 py-1 border rounded-md outline-none '  {...register("message", { required: false })}/>
    <br/>
    {errors.password && <span className='text-sm text-red-500'  >This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
    
   
    <button className=' bg-blue-500 text-white cursor-pointer h-10 w-20 rounded-xl' >Submit</button>
                            
    
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
import React from 'react'
import Cards from './cards'
import list  from '../list.json'
import { Link } from 'react-router-dom'


function Course() {
  return (
   <>
   <div  className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you<span className='text-pink-500'> Here! :)</span></h1>
        <p className='mt-12'>The sun dipped below the horizon, casting a warm golden glow across the quiet beach. Waves gently lapped at the shore, their rhythmic sound creating a peaceful melody. A cool breeze rustled through the palm trees, and the salty scent of the ocean filled the air. It was a perfect evening, a brief moment of serenity in an otherwise busy world.</p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key ={item.id} item={item}/>
          ))
        }
    </div>
   </div>
   </>
  )
}

export default Course
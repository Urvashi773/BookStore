import React from 'react'
import banner from "../assets/banner.jpg"

function Banner() {
    return (
        <><div className="max-w-screen-2xlc container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
            <div className="w-1/2 order-2 md:order-1 w-full  mt-12 md:mt-32">
                <div className=' space-y-12'>
                    <h1 className='text-4xl font-bold'>
                        Hello, Welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1></div>
                <p className='text-xl '>DaisyUI is an excellent tool for developers who enjoy the flexibility of Tailwind CSS but also want the convenience of ready-made, accessible UI components. It speeds up the process of building UI while maintaining the ability to fully customize the design using Tailwind's utility classes.</p>
                <div className='py-3'> <label className="input input-bordered flex items-center gap-2 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                </div>
                <button className="btn mt-6 btn-secondary">Subscribe</button>
            </div>

            <div className="order-1 w-full md:w-1/2">
            <img src={banner} alt='banner image' className='w-95 h-95 mt-4 md:h-[400px] md:object-inherit'></img></div>
        </div>
        </>
    )
}

export default Banner
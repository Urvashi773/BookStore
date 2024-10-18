import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function AboutUs() {
  return (
    <>
     <Navbar />
     <div className="flex flex-col items-center justify-center mx-auto py-16 px-8 max-w-4xl text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-2 flex justify-center  py-20">About Us</h1>
        <p className="text-lg font-bold text-pink-600 ">Hello! It's nice to see you here!</p>
      </header>
      <section className="text-xl text-gray-700 leading-relaxed space-y-6 dark:text-white">
        <p>
          We are a passionate team of book enthusiasts dedicated to providing you with the best selection of books. 
          Our mission is to help you discover, enjoy, and cherish your love for reading.
        </p>
        <p>
          At our bookstore, we offer a wide range of genres and titles, carefully curated to cater to every reader’s taste. 
          From timeless classics to the latest releases, we strive to create a seamless and enjoyable shopping experience.
        </p>
        <p>
          In our daily work, we focus on delivering high-quality user experiences, from understanding customer needs to 
          creating a platform that's easy to navigate, explore, and purchase books.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
import React from 'react'
import Home from './components/home/Home'

import{Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'


function Hello() {
  return (
    <>
  {/* <Home/>
   <Course/> */}
   <div className=" dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </div>
    </>
  )
}

export default Hello
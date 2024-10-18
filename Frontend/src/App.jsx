import React from 'react'
import Home from './components/home/Home'

import{Navigate, Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Registration from './components/Registration'
import AboutUs from './components/AboutUs'


function App() {
  const[authUser,setAuthUser]=useAuth()
  console.log(authUser);

  
  return (
    <>
  {/* <Home/>
   <Course/> */}
   <div className=" dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
   </Routes>
   <Toaster />
   </div>

   
    </>
  )
}

export default App
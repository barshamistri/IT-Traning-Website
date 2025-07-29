import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import Form from "../components/Form"
import Footer from "../components/Footer";





function Contact() {

  return (
    <div>
      <div >
        <h1 className='text-4xl font-bold ml-120 mt-20'>Contact Us</h1>
        <p className='mt-2 ml-65 text-xl'>Sipalaya info tech ready to provide the right solution according to your needs</p>
        
      </div>

      <div className='flex mt-20 ml-5 gap-13'>
        <div className=' w-60 h-50 shadow-2xl'>
          <h1 className='ml-25 mt-8'><FaLocationDot size={30} /></h1>
          <h1 className='text-2xl font-bold ml-17'>Location</h1>
          <p className='mt-3 ml-2'> Nearby Bhat-Bhateni koteswor,</p>
            <p  className='ml-18'> Kathmandu</p>
        </div>

        <div className=' w-60 h-50 shadow-2xl'>
          <h1 className='ml-25 mt-8'><FaPhoneVolume size={30} /></h1>
          <h1 className='text-2xl font-bold ml-18'>Contact</h1>
          <p className='mt-3 ml-14'>+977 9818968546</p>
          <p  className='ml-14'>+977 9860552717</p>
        </div>

        <div className=' w-60 h-50 shadow-2xl'>
          <h1 className='ml-25 mt-8'><MdMarkEmailUnread size={30} /></h1>
          <h1 className='text-2xl font-bold ml-22'>Email</h1>
          <p  className='mt-3 ml-9'>infotech@sipalaya.com</p>
          <p className='ml-2'>sipalayainfotech01@gmail.com</p>
        </div>

        <div className='w-60 h-50 shadow-2xl'>
          <h1 className='ml-25 mt-8'><FaPeopleRoof size={30} /></h1>
         <h1 className='text-2xl font-bold ml-10'> Visit Between</h1>
         <p className='mt-3 ml-13'>Mon-Fri: 8:00-5:00</p>
         <p className='ml-7'>Saturday-Sunday Closed</p>
        </div>
      </div>

      <div className="mt-50">
        <Form/>
        <Footer/>
        

      </div>


    </div>
  )
}

export default Contact

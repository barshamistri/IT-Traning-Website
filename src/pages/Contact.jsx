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
    
    <div className="px-4 py-10 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">
          Sipalaya Info Tech is ready to provide the right solution according to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Location */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <div className="text-blue-600 mb-4 mx-auto w-fit">
            <FaLocationDot size={30} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-gray-700">Nearby Bhat-Bhateni, Koteswor</p>
          <p className="text-gray-700">Kathmandu, Nepal</p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <div className="text-green-600 mb-4 mx-auto w-fit">
            <FaPhoneVolume size={30} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">+977 9818968546</p>
          <p className="text-gray-700">+977 9860552717</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <div className="text-red-600 mb-4 mx-auto w-fit">
            <MdMarkEmailUnread size={30} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">infotech@sipalaya.com</p>
          <p className="text-gray-700">sipalayainfotech01@gmail.com</p>
        </div>

        {/* Visiting Hours */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <div className="text-purple-600 mb-4 mx-auto w-fit">
            <FaPeopleRoof size={30} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Visit Between</h2>
          <p className="text-gray-700">Mon–Fri: 8:00AM – 5:00PM</p>
          <p className="text-gray-700">Saturday–Sunday: Closed</p>
        </div>
      </div>

      <div className="mt-50">
        <Form/>
        
        

      </div>


    </div>
    <Footer/>
   </div>
  )
}

export default Contact

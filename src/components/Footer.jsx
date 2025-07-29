import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sipalaya Info Tech</h2>
          <p className="text-sm leading-6">
            Narephat 32 - Koteshwor, Kathmandu <br />
            PAN No: 610189542
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-400">Courses</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/admission" className="hover:text-blue-400">Admission</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center text-sm mb-2"><FaPhone className="mr-2" />9851344071, 9806393939</p>
          <p className="flex items-center text-sm"><FaEnvelope className="mr-2" />infotech@sipalaya.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="hover:text-blue-500" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com" className="hover:text-pink-500" target="_blank"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-blue-400" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Sipalaya Info Tech Pvt. Ltd. | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

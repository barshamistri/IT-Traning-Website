import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-500 pb-8">
        
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NovaTech Learn</h2>
          <p className="text-gray-300">Empowering IT learners globally with expert-led training and career-ready programs.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/course" className="hover:text-white transition">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/admission" className="hover:text-white transition">Admission</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-gray-300 mb-2">Email: info@novatechlearn.com</p>
          <p className="text-gray-300 mb-4">Phone: +977-9800000000</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NovaTech Learn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

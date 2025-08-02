import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/admission", label: "Admission" },
    { path: "/course", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">NovaTech <span className="text-blue-400">Learn</span></div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-10 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-blue-200 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link
            to="/register"
            className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-6 py-4 space-y-3 text-base font-medium animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="block hover:text-blue-200 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={closeMenu}
            className="block bg-white text-blue-900 text-center font-semibold rounded-full px-4 py-2 mt-2 hover:bg-blue-100 transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

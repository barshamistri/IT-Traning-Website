import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-blue-900 text-white   flex p-4 space-x-5">
        <div className="font-bold text-xl">NovaTech Learn</div>

        
            <a href="/" className="ml-30 font-bold">Home</a>
        <a href="/about" className="ml-7 font-bold">About</a>
        <a href="/admission"  className="ml-7 font-bold">Admission</a>
        <a href="/course"  className="ml-7 font-bold">Courses</a>
        <a href="/blog"  className="ml-7 font-bold">Blog</a>
        <a href="/contact"  className="ml-7 font-bold">Contact</a>
        <a href="/login"  className="ml-29 font-bold">Log in</a>
        
        
      </div>
    </div>
  );
}

export default Navbar;

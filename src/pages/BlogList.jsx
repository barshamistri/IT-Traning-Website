// src/pages/BlogList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";
import Footer from "../components/Footer";

const BlogList = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Latest Blogs
        </h1>
        <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto">
          Welcome to our blog, where we share insights, tutorials, and news to{" "}
          <span className="font-semibold text-indigo-600 ml-20">
            help you stay updated and improve your skills.
          </span>
        </p>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col h-full"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="mt-auto text-blue-500 hover:underline text-sm text-left"
                >
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;

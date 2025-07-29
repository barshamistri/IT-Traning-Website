// src/pages/BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
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
              <Link
                to={`/blog/${blog.id}`}
                className="mt-auto text-blue-500 hover:underline text-sm"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

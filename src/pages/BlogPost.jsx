import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center mt-10 font-poppins">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Blog not found</h2>
        <Link
          to="/blog"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          ← Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 font-poppins">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">{blog.title}</h1>

      <div className="w-full overflow-hidden rounded-2xl shadow-lg mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto max-h-[500px] object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="text-center mb-10">
        <p className="text-2xl text-gray-600 italic font-bold">{blog.description}</p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 mb-12 font-bold ">
        {blog.content.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/blog"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-sm"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;

// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-red-600">Blog not found</h2>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="w-full overflow-hidden rounded-xl mb-6 shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto max-h-[500px] object-cover object-center"
        />
      </div>

      <p className="text-lg text-gray-600 mb-4">{blog.description}</p>
      <p className="text-base leading-7 text-gray-800 whitespace-pre-line">{blog.content}</p>

      <Link
        to="/blog"
        className="inline-block mt-8 text-blue-600 hover:underline text-sm"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogPost;

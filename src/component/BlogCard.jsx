import React from "react";
import { useSelector } from "react-redux";

const BlogCard = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((i) => (
            <a
            key={i.id}
            href="#"
            className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {i.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {i.description}
            </p>
          </a>
        ))}
      
      </div>
    </div>
  );
};

export default BlogCard;

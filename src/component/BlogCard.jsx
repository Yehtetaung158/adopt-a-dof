import React from "react";
import { useSelector } from "react-redux";

const BlogCard = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  // console.log(blogs)
  // {blogs.map((i,index) => (
  //   {index =0 && <></>  }
  // ))}
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((i, index) => {
          return index === 0 ? (
            <a
              key={i.id}
              href="#"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between gap-2 w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.title}
                  </h5>
                <img
                  className="rounded-t-lg  h-[400px] object-cover indent-10 rounded-lg"
                  src={i.url}
                />
                <div className="w-full">
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {i.description}
                  </p>
                </div>
              </div>
            </a>
          ) : (
            <a
              key={i.id}
              href="#"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between gap-2 w-full">
                <img
                  className="rounded-t-lg w-1/4 h-[100px] object-cover indent-10 rounded-lg"
                  src={i.url}
                />
                <div className="w-3/4">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {i.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ isHome }) => {
  const nav=useNavigate()
  const blogs = useSelector((state) => state.blogs.blogs);
  const blogsInHomePage = blogs.slice(0, 3);
  console.log(blogsInHomePage);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 gap-4">
        {isHome ? (
          <>
             {blogsInHomePage.map((i, index) => {
              return index !== blogsInHomePage.length - 1 ? (
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
              ) : (
                <a
                  key={i.id}
                  href="#"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="flex justify-between gap-2 w-full relative">
                  <button
                  onClick={() => {
                    nav("/blog");
                  }}
                  className=" absolute right-0 z-10 h-full bg-gray-100 opacity-50 w-full flex items-center justify-center  "
                  href=""
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
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
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCard;

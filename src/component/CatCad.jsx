import React from "react";
import { useNavigate } from "react-router-dom";

const CatCad = ({ i, data, isHome }) => {
  const nav = useNavigate();
  const seemore = i !== data[data.slice(0, 4).length - 1];
  console.log(isHome);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      {isHome ? (
        <>
          {i !== data[data.slice(0, 4).length - 1] ? (
            <>
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={i.url}
                  alt={i.name}
                />
              </a>
            </>
          ) : (
            <>
              <div className=" relative" href="#">
                <button
                  onClick={() => {
                    nav("pep");
                  }}
                  className=" absolute right-0 z-10 h-full bg-gray-100 opacity-50 w-full flex items-center justify-center"
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
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={i.url}
                  alt={i.name}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={i.url}
              alt={i.name}
            />
          </a>
        </>
      )}
    </div>
  );
};

export default CatCad;

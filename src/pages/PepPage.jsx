import React, { useEffect, useState } from "react";
import PetCard from "../component/PetCard";
import useCatListFetch from "../hook/useCatList";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/service/itemSlice";

const PepPage = () => {
  const [isOpenDrower, setisOpenDrower] = useState(false);
  const [data, isError, isLoading, fetchMoreCats] = useCatListFetch(50);
  const [moreLoad, setMoreLoad] = useState([]);
  const cardData = { data, isError, isLoading, moreLoad };
  console.log(moreLoad);
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    if (data) {
      data?.map((i) => {
        setMoreLoad((pre) => [...pre, i]);
      });
    }
  }, [data]);

  const moreLoadHnadle = () => {
    fetchMoreCats();
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const favDelHandle = (id) => {
    // removeItem(id)
    console.log("imdelete");
  };

  return (
    <div>
      <div className=" relative w-full">
        <button
          onClick={() => {
            setisOpenDrower(!isOpenDrower);
          }}
          type="button"
          className="relative text-white flex gap-2 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5 mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
          FAV
          <p className={`absolute -top-2 -right-1 bg-red-500 ${items.length===0 && 'hidden'} px-1 rounded-full`}>
            {items.length}
          </p>
        </button>
        {/* Dropdown menu */}
        <div
          // id="dropdownUsers"
          className={`z-10 ${
            !isOpenDrower && " hidden"
          } absolute  top-14 bg-white rounded-lg shadow w-1/2 dark:bg-gray-700`}
        >
          <ul
            className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUsersButton"
          >
            {items.map((item) => (
              <li key={item.id} className=" flex justify-between px-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    className="w-6 h-6 me-2 rounded-full"
                    src={item.url}
                    alt="Jese image"
                  />
                  {item.id}
                </a>
                <button
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    console.log(item.id);
                  }}
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-red-700 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <PetCard key={Date.now()} cardData={cardData} />
      </div>
      <button
        onClick={moreLoadHnadle}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5 mt-0"
      >
        Load More
      </button>
    </div>
  );
};

export default PepPage;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/service/itemSlice";
import CatProfile from "./CatProfile";

const AddFavbtn = ({ i, isCatProfile }) => {
  const [isProfileOpen,setisProfileOpen]=useState(false)
  console.log(isProfileOpen)
  const dispatch = useDispatch();
  const Addfavhandle = () => {
    dispatch(addItem(i));
    console.log(i);
  };
  const profileBntHandle = () => {
    setisProfileOpen(!isProfileOpen)
  };

  return (
    <div className=" relative">
      <button
        onClick={isCatProfile ? profileBntHandle : Addfavhandle}
        type="button"
        className={
          isCatProfile
            ? "flex gap-1 bg-gradient-to-r font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            : "flex gap-1 m-1 bg-gradient-to-r font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}
      >
        {" "}
        {isCatProfile ? (
          <>
            <p className=" flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 flex justify-center items-center"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            </p>
          </>
        ) : (
          <>
              <p className="flex gap-2 items-center text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
              <span>fav</span>
            </p>
          </>
        )}
      </button>
      {isProfileOpen && <CatProfile setisProfileOpen={setisProfileOpen} i={i}/>}
    </div>
  );
};

export default AddFavbtn;

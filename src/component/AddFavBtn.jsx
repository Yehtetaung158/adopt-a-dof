import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/service/itemSlice";

const AddFavbtn = ({ i }) => {
  // const handleDownload = async (imageUrl, fileName) => {
  //     try {
  //       const response = await fetch(imageUrl);
  //       const blob = await response.blob();
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         const base64DataUrl = reader.result;
  //         const link = document.createElement('a');
  //         link.href = base64DataUrl;
  //         link.setAttribute('download', fileName);
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link);
  //       };
  //       reader.readAsDataURL(blob);
  //     } catch (error) {
  //       console.error('Error downloading image:', error);
  //     }
  //   };
  const dispatch = useDispatch();
  const Addfavhandle = () => {
    dispatch(addItem(i));
    console.log(i)
  };

  return (
    <div>
      <button
        onClick={Addfavhandle} // Pass function reference here
        type="button"
        className="flex gap-1 m-1  bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-red-600 "
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <p className=" text-white">Add fav</p>
      </button>
    </div>
  );
};

export default AddFavbtn;

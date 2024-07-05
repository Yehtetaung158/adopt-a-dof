import React, {  useState } from "react";
import Form from "./Form";

const CatProfile = ({ setisProfileOpen, i, item, profileBntHandle }) => {
  const [isAdopt, setIsAdopt] = useState(false);
  console.log(isAdopt)

  return (
    <>
      {!isAdopt ? (
        <>
          <div
           className=" fixed mx-auto inset-0 flex flex-col items-center justify-center z-50 w-full max-w-sm h-auto bg-gray-100 py-2 my-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800   dark:border-gray-700 box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px ">
            <button
              onClick={() => {
                profileBntHandle ? profileBntHandle() : setisProfileOpen(false);
                console.log("i am x")
              }}
              className=" absolute top-2 right-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {item ? (
              <>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={item.url}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Shwe War
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    I am a cat
                  </span>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Breed
                        </th>
                        <td className="px-6 py-4">Briman</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Gender
                        </th>
                        <td className="px-6 py-4">Female</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Age
                        </th>
                        <td className="px-6 py-4">
                          <span>3</span>
                          <span>Years</span>
                        </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Color
                        </th>
                        <td className="px-6 py-4">frast,chocolate</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Size/Weight
                        </th>
                        <td className="px-6 py-4">16 inches long/7 paunds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={i.url}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Shwe Wah
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    My name is Shwe Wah
                  </span>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Breed
                        </th>
                        <td className="px-6 py-4">Briman</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Gender
                        </th>
                        <td className="px-6 py-4">Female</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Age
                        </th>
                        <td className="px-6 py-4">
                          <span>3</span>
                          <span>Years</span>
                        </td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Color
                        </th>
                        <td className="px-6 py-4">frast,chocolate</td>
                      </tr>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Size/Weight
                        </th>
                        <td className="px-6 py-4">16 inches long/7 paunds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
            <button
              onClick={() => setIsAdopt(true)}
              type="button"
              className="text-white my-4  w-5/6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              ADOPT
            </button>
          </div>
        </>
      ) : (
        <>
        <div
          className=" fixed  mx-auto inset-0 flex flex-col items-center justify-center z-50 w-full max-w-sm h-auto px-3 text-black  py-2 my-2 border border-gray-200 rounded-lg shadow bg-cat-hero "
        >
          <Form />
        </div>
        </>
      )}
    </>
  );
};

export default CatProfile;

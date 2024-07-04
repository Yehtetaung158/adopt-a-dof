import React from "react";
import { useDispatch } from "react-redux";
import { toggleSingleimg, changeArr } from "../store/service/petService"; // Adjust the path as needed

const Imgbtn = ({ id, moreLoad }) => {
  const dispatch = useDispatch();

  // Function to get the index of an item by its ID
  const getIndexById = (array, id) => {
    return array.findIndex((item) => item.id === id);
  };

  const handleBtn = async () => {
    try {
      dispatch(toggleSingleimg());
      if (!Array.isArray(moreLoad)) {
        console.error("moreLoad is not an array");
        return;
      }
      const index = getIndexById(moreLoad, id);
      dispatch(changeArr(index));
    } catch (error) {
      console.error("Error handling button click:", error);
    }
  };

  return (
    <div>
      <button onClick={handleBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 bg-gray-300"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Imgbtn;

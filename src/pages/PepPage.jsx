import React, { useState } from "react";
// import DogList from "../hook/useDogList";
import PetCard from "../component/PetCard";
import useCatListFetch from "../hook/useCatList";

const PepPage = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const data=useCatListFetch(50);
  console.log(data)

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            onChange={handleSelectChange}
            value={selectedOption}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
      <div><PetCard data={data}/></div>
    </div>
  );
};

export default PepPage;

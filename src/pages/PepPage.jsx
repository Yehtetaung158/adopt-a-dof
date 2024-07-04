import React, { useEffect, useState } from "react";
import PetCard from "../component/PetCard";
import useCatListFetch from "../hook/useCatList";
import { useSelector } from "react-redux";
import Foolter from "../component/Foolter";
import SingleImg from "../component/SingleImg";
import FavList from "../component/FavList";

const PepPage = () => {
  const [isOpenDrower, setisOpenDrower] = useState(false);
  const [data, isError, isLoading, fetchMoreCats] = useCatListFetch(10);
  const [moreLoad, setMoreLoad] = useState([]);
  const cardData = { data, isError, isLoading, moreLoad };
  const items = useSelector((state) => state.items.items);
  const isSingleimg = useSelector((state) => state.petService.isSingleimg);

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

  return (
    <div className="relative">
      <FavList
        setisOpenDrower={setisOpenDrower}
        isOpenDrower={isOpenDrower}
        items={items}
      />
      <div>
        {isSingleimg && (
          <SingleImg key={Date.now()} cardData={cardData} moreLoad={moreLoad} />
        )}
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
      <Foolter />
    </div>
  );
};

export default PepPage;

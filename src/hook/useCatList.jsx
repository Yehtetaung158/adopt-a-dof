import { useCatListQuery } from "../store/service/endpoint/authdog";
import { useEffect, useState } from "react";

const useCatListFetch = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const {data,isError,isLoading} = useCatListQuery(count);
  
  const fetchMoreCats = () => {
    setCount(count + 10)
  };

  return [data,isError,isLoading, fetchMoreCats];
};

export default useCatListFetch;

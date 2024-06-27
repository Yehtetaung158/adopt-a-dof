import { useCatListQuery } from '../store/service/endpoint/authdog';

const useCatListFetch = (count) => {
  const { data, isError, isLoading } = useCatListQuery(count);
  return {data,isError,isLoading}
};

export default useCatListFetch;

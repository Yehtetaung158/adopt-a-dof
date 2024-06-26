// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ApiService = createApi({
  reducerPath: "ApiService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1/images/",
    prepareHeaders:(headers,{getstate})=>{
        
    }
  }),
  endpoints: (builder) => ({}),
});

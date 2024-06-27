// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ApiService = createApi({
  reducerPath: "ApiService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/images/",
    headers : {
      'x-api-key': `live_1YgEljFhFuJYOns0RcwsZFhRBO1sJfGKO1exY4AstVRqp0NXaRA1YYHNUyPVAkhg`,
      'Content-Type':`application/json`,
    },
    prepareHeaders:(headers,{getstate})=>{
        
    }
  }),
  endpoints: (builder) => ({}),
});

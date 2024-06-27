import { ApiService } from "../Apiservice";

const authDogEndpoint=ApiService.injectEndpoints({
    endpoints:(builder)=>({
        catList:builder.query({
            query:(count)=>({
                url:`/search?limit=${count}`
            })
        })
    })
})

export const {
    useCatListQuery
}=authDogEndpoint
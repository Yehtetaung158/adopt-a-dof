import { ApiService } from "../Apiservice";

const authDogEndpoint=ApiService.injectEndpoints({
    endpoints:(builder)=>({
        getDogs:builder.query({
            query:()=>({
                url:`/search?limit=100&api_key=live_1YgEljFhFuJYOns0RcwsZFhRBO1sJfGKO1exY4AstVRqp0NXaRA1YYHNUyPVAkhg`
            })
        })
    })
})

export const {
    useGetDogsQuery
}=authDogEndpoint
import apiSlice from "../api/apiSlice";

const itemApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postItem : builder.mutation({
            query : (data) => ({
                url : "/item",
                method : "POST",
                body:data,
            })
        }),
        getItem : builder.query({
            query : () => ({
                url : "/item",
            })
        }),
        // getJobsById : builder.query({
        //     query : (id) => ({
        //         url : "/products/${id}",
        //     })
        // }),
    }),
});
export const {usePostItemMutation, useGetItemQuery} = itemApi;
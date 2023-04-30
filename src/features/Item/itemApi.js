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
        getItemById : builder.query({
            query : (id) => ({
                url : `/item/${id}`,
            })
        }),
    }),
});
export const {usePostItemMutation, useGetItemQuery,useGetItemByIdQuery} = itemApi;
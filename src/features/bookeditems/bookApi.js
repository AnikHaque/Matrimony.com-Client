import apiSlice from "../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postBooked : builder.mutation({
            query : (data) => ({
                url : "/bookshop",
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
export const {usePostBookedMutation} = bookApi;
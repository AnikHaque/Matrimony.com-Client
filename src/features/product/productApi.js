import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob : builder.mutation({
            query : (data) => ({
                url : "/addedproducts",
                method : "POST",
                body:data,
            })
        }),
        getJobs : builder.query({
            query : () => ({
                url : "/products",
            })
        }),
        getJobsById : builder.query({
            query : (id) => ({
                url : "/products/${id}",
            })
        }),
    }),
});
export const {usePostJobMutation,useGetJobsQuery,useGetJobsByIdQuery} = productApi;
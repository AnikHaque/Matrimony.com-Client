import apiSlice from "../api/apiSlice";

const lawyerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postLawyer : builder.mutation({
            query : (data) => ({
                url : "/lawyer",
                method : "POST",
                body:data,
            })
        }),
        getLawyer : builder.query({
            query : () => ({
                url : "/lawyer",
            })
        }),
        // getJobsById : builder.query({
        //     query : (id) => ({
        //         url : "/products/${id}",
        //     })
        // }),
    }),
});
export const {usePostLawyerMutation, useGetLawyerQuery} = lawyerApi;
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
        getLawyerById : builder.query({
            query : (id) => ({
                url : `/lawyer/${id}`,
            })
        })
    }),
});
export const {usePostLawyerMutation, useGetLawyerQuery, useGetLawyerByIdQuery} = lawyerApi;
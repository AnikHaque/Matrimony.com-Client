import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob : builder.mutation({
            query : (data) => ({
                url : "/ambulance",
                method : "POST",
                body:data,
            })
        }),
        getJobs : builder.query({
            query : () => ({
                url : "/ambulance",
            })
        }),
        getJobsById : builder.query({
            query : (id) => ({
                url : "/ambulance/${id}",
            })
        }),
    }),
});
export const {usePostJobMutation,useGetJobsQuery,useGetJobsByIdQuery} = jobApi;
import apiSlice from "../api/apiSlice";

const agentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postAgent : builder.mutation({
            query : (data) => ({
                url : "/agent",
                method : "POST",
                body:data,
            })
        }),
        getagent : builder.query({
            query : () => ({
                url : "/agent",
            })
        }),
        // getJobsById : builder.query({
        //     query : (id) => ({
        //         url : "/products/${id}",
        //     })
        // }),
    }),
});
export const {usePostAgentMutation,useGetagentQuery} = agentApi;
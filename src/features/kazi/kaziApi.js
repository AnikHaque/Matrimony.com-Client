import apiSlice from "../api/apiSlice";

const kaziApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postKazi : builder.mutation({
            query : (data) => ({
                url : "/kazi",
                method : "POST",
                body:data,
            })
        }),
        getKazi : builder.query({
            query : () => ({
                url : "/kazi",
            })
        }),
        // getJobsById : builder.query({
        //     query : (id) => ({
        //         url : "/products/${id}",
        //     })
        // }),
    }),
});
export const {usePostKaziMutation,useGetKaziQuery} = kaziApi;
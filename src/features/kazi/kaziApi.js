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
        getKaziById : builder.query({
            query : (id) => ({
                url : `/kazi/${id}`,
            })
        }),
    }),
});
export const {usePostKaziMutation,useGetKaziQuery, useGetKaziByIdQuery} = kaziApi;
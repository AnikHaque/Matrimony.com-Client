import apiSlice from "../api/apiSlice";

const topProfileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postTopProfile : builder.mutation({
            query : (data) => ({
                url : "/topprofile",
                method : "POST",
                body:data,
            })
        }),
        getTopProfile : builder.query({
            query : () => ({
                url : "/topprofile",
            })
        }),
        getKaziById : builder.query({
            query : (id) => ({
                url : `/kazi/${id}`,
            })
        }),
        }),
      
});
export const {usePostTopProfileMutation, useGetTopProfileQuery} = topProfileApi;
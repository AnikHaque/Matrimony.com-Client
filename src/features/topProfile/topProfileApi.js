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
        getTopProfileById : builder.query({
            query : (id) => ({
                url : `/topprofile/${id}`,
            })
        }),
        }),
      
});
export const {usePostTopProfileMutation, useGetTopProfileQuery, useGetTopProfileByIdQuery} = topProfileApi;
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
        getRelatedkazi: builder.query({
            query: ({ id,gender }) => {
                const tags = gender.split(" ");
                const likes = tags.map((tag) => `gender_like=${tag}`);
                const queryString = `/kazi?${likes.join("&")}&_limit=4`;
                return queryString;
            },
        }),
    }),
});
export const {usePostKaziMutation,useGetKaziQuery, useGetKaziByIdQuery, useGetRelatedkaziQuery} = kaziApi;
import apiSlice from "../api/apiSlice";

const choiceListApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postChoice : builder.mutation({
            query : (data) => ({
                url : "/choice",
                method : "POST",
                body:data,
            })
        }),
        getChoice : builder.query({
            query : () => ({
                url : "/choice",
            })
        }),
        // getItemById : builder.query({
        //     query : (id) => ({
        //         url : `/item/${id}`,
        //     })
        // }),
    }),
});
export const {usePostChoiceMutation,useGetChoiceQuery} = choiceListApi;
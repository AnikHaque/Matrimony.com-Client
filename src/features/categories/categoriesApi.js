import apiSlice from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories : builder.query({
            query : () => ({
                url : "/categories",
            })
        }),
    
    }),
});
export const {useGetCategoriesQuery} = categoriesApi;
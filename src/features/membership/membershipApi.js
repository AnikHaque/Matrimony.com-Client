import apiSlice from "../api/apiSlice";

const membershipApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postMembership : builder.mutation({
            query : (data) => ({
                url : "/membership",
                method : "POST",
                body:data,
            })
        }),
        getMembership : builder.query({
            query : () => ({
                url : "/membership",
            })
        }),
        getMembershipById : builder.query({
            query : (id) => ({
                url : "/membership/${id}",
            })
        }),
    }),
});
export const {usePostMembershipMutation} = membershipApi;
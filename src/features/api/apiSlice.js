import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:"https://matrimony-com-server-anikhaque.vercel.app",
  }),
  endpoints: (builder) => ({}),
})
export default apiSlice;
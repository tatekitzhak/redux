import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiProductSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com', 
    /*
      https://fakeapi.platzi.com/
      https://api.escuelajs.co/api/v1/products

    */
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductsQuery } = apiSlice

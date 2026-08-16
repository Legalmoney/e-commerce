import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductResponse } from "../types/product";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
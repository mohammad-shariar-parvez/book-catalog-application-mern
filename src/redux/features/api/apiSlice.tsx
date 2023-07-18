/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-dusky.vercel.app/api/v1/",
  }),
  tagTypes: ["Books", "Book", "AllBooks"],
  endpoints: (_builder) => ({}),
});

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",

      providesTags: ["AllBooks"],
    }),

    getBooksWithFilter: builder.query({
      query: (queryString) => `/books/?${queryString}`,
      providesTags: ["Books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, arg) => [{ type: "Book", id: arg }],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books", "AllBooks"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, arg: { id: string }) => [
        "AllBooks",
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books", "AllBooks"],
    }),
  }),
});

export const {
  useGetBooksWithFilterQuery,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;

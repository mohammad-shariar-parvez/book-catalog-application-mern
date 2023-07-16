/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      keepUnusedDataFor: 600,
      providesTags: ["Books"],
    }),

    // getFilteredBooks: builder.query({
    //   query: ({ search, genre, publicationDate }) => {
    //     let queryUrl = "";
    //     if (search) {
    //       // console.log("SEARCH from Mmain", sort);
    //       queryUrl += `searchTerm=${search}`;
    //     }
    //     if (genre) {
    //       queryUrl += `&genre=${genre}`;
    //     }
    //     if (publicationDate) {
    //       queryUrl += `&publicationDate=${publicationDate}`;
    //     }
    //     return `/jobs/?${encodeURI(queryUrl)}`;
    //   },
    //   invalidatesTags: ["Books"],
    // }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, arg) => [{ type: "Book", id: arg }],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useGetFilteredBooksQuery,
} = bookApi;

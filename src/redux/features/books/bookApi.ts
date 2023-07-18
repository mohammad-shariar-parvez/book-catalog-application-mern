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

      // async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
      //   try {
      //     const result = await queryFulfilled;
      //     // console.log("RESULT isss", result.data["data"]);
      //     dispatch(createDropDown(result.data["data"]));
      //   } catch (err) {
      //     // console.log("EEEEOOORRR");
      //     // do nothing
      //   }
      // },
      providesTags: ["AllBooks"],
    }),

    getBooksWithFilter: builder.query({
      query: (queryString) => `/books/?${queryString}`,
      providesTags: ["Books"],
    }),

    // getFilteredBooks: builder.mutation({
    //   query: (data) => ({
    //     url: `/books?param=${data}`,
    //     method: "GET",
    //   }),
    //   async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       console.log("RESULT", result);

    //       dispatch(addBooks(result.data));
    //     } catch (err) {
    //       // do nothing
    //     }
    //   },
    // }),

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

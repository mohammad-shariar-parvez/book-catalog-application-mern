/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  _id: string;
}

interface ICart {
  books: IBook[];
  total: number;
}

const initialState: ICart = {
  books: [],
  total: 0,
};

const futureBooksSlice = createSlice({
  name: "futureBooks",
  initialState,
  reducers: {
    addFutureBook: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book.id === action.payload.id,
      );

      if (!existing) {
        state.books.push({ ...action.payload });
        state.total += 1;
      }

      localStorage.setItem(
        "futueBooks",
        JSON.stringify({
          books: state.books,
          total: state.total,
        }),
      );
    },

    removeFutureBook: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (product) => product.id !== action.payload.id,
      );
      state.total -= 1;

      localStorage.setItem(
        "futueBooks",
        JSON.stringify({
          books: state.books,
          total: state.total,
        }),
      );
    },
    lStorgeFutureBooks: (state, action: PayloadAction<ICart>) => {
      state.books = action.payload.books;
      state.total = action.payload.total;
    },
  },
});

export const { addFutureBook, removeFutureBook, lStorgeFutureBooks } =
  futureBooksSlice.actions;

export default futureBooksSlice.reducer;

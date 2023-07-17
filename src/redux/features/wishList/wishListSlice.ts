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

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addBookWishList: (state, action: PayloadAction<IBook>) => {
      console.log(state);

      const existing = state.books.find(
        (book) => book.id === action.payload.id,
      );
      console.log("PAYLOAD ID ", action.payload.id, existing);

      if (!existing) {
        state.books.push({ ...action.payload });
        state.total += 1;
      }
    },

    removeBookWishList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (product) => product.id !== action.payload.id,
      );
      state.total -= 1;
    },
  },
});

export const { addBookWishList, removeBookWishList } = wishListSlice.actions;

export default wishListSlice.reducer;

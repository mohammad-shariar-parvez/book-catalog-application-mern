/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface IFilter {
//   queryUrl: {
//     queryString: string;
//     queryCategory: string;
//     queryRemove: boolean;
//   };
//   dropDowns?: string[];
//   remove?: boolean;
// }

interface IFilter {
  queryString?: string;
  genre?: string;
  publicationYear?: string;
}
// task to marge interface
const initialState: IFilter = {
  queryString: "",
  genre: "",
  publicationYear: "",
};

const filterSlice = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {
    createGenre: (state, action: PayloadAction<string>) => {
      state.genre = "&genre" + "=" + action.payload;
      state.queryString = state.genre + state.publicationYear;
    },
    createYear: (state, action: PayloadAction<string>) => {
      // console.log("STETE", state);
      state.publicationYear = "&publicationDate" + "=" + action.payload;
      state.queryString = state.genre + state.publicationYear;
    },
  },
});

export const { createGenre, createYear } = filterSlice.actions;

export default filterSlice.reducer;

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
  queryString: string;
  genre:string;
  publicationYear:string;
}
// task to marge interface
const initialState: IFilter = {
  
    queryString: "",
    genre:"",
    publicationYear:"",
};

const filterSlice = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {
    createQueryString: (state, action: PayloadAction<string>) => {
      // console.log("STETE", state);
      console.log("action.payload", action.payload);
      const actionQueryString = action.payload.queryUrl["queryString"]; // Programming
      const actionQueryRemove = action.payload.queryUrl.queryRemove;
      const actionQueryCategory = action.payload.queryUrl.queryCategory;

      let stateQueryUrl = state.queryUrl.queryString; // ""

      const encodedActionQueryUrl =
        actionQueryCategory + "=" + actionQueryString;
      //encodedstateQueryUrl = "&genre=Programming"

      if (actionQueryRemove) {
        // Construct a regular expression pattern that matches the removeString with optional value
        const regexToRemove = new RegExp(
          `\\${actionQueryCategory}(=\\w+)?`,
          "g",
        );
        // Remove the specified removeString from the current query string
        const updatedQueryString = stateQueryUrl.replace(regexToRemove, "");
        // Append the new dynamic value to the updated query string
        stateQueryUrl = updatedQueryString;
      }

      const stringWithQuotes = state.queryUrl.queryString;
      const updatedQueryString = stringWithQuotes.replace(/$&genre=\w+/, "",);
      console.log("ooooooooooo", state.queryUrl.queryString.toString());
      console.log("PPPPPPPPP", updatedQueryString);

      state.queryUrl.queryString = updatedQueryString + encodedActionQueryUrl;

      // console.log("FINAL STATE STRING", stateQueryUrl);
      console.log("FINAL STATE STRING", state.queryUrl.queryString);
    },
    createDropDown: (state, action: PayloadAction<string[]>) => {
      // console.log("DROPDOWN STETE", state);
      // console.log("DROPDOWN action.type", action.type);
      // console.log("DROPDOWN action.payload", action.payload);
    },
  },
});

export const { createQueryString, createDropDown } = filterSlice.actions;

export default filterSlice.reducer;

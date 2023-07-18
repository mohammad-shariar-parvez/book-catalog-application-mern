/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IFilter {
  queryUrl: {
    queryString: string;
    queryCategory: string;
    queryRemove: boolean;
  };
  dropDowns?: string[];
  remove?: boolean;
}

interface IQuery {
  queryUrl: {
    queryString?: string;
    queryCategory?: string;
    queryRemove?: false;
  };
}
// task to marge interface
const initialState: IFilter = {
  queryUrl: {
    queryString: "",
    queryCategory: "",
    queryRemove: false,
  },

  dropDowns: [],
  remove: false,
};

const filterSlice = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {
    createQueryString: (state, action: PayloadAction<IQuery>) => {
      // console.log("STETE", state);
      console.log("action.payload", action.payload);
      const actionQueryString = action.payload.queryUrl["queryString"]; // Programming
      const actionQueryRemove = action.payload.queryUrl.queryRemove;
      const actionQueryCategory = action.payload.queryUrl.queryCategory;

      let stateQueryUrl = state.queryUrl.queryString; // ""

      const encodedActionQueryUrl =
        actionQueryCategory + "=" + actionQueryString;
      //encodedstateQueryUrl = "&genre=Programming"

      const existingArgs = ["&genre=", "&publicationDate=", "&searchTerm="];

      // Handle additional conditions to remove existing arguments
      // if (actionQueryRemove) {
      //   stateQueryUrl = stateQueryUrl.replace(
      //     `/&${encodedActionQueryUrl}=[^&]*/`,
      //     "",
      //   );
      // }

      // Remove existing arguments from the URL
      for (const arg of existingArgs) {
        const argIndex = stateQueryUrl.indexOf(arg);
        if (argIndex !== -1) {
          const nextAmpIndex = stateQueryUrl.indexOf("&", argIndex + 1);
          console.log("STATE URL", stateQueryUrl);
          console.log("Next attempp", nextAmpIndex);

          if (nextAmpIndex !== -1) {
            stateQueryUrl =
              stateQueryUrl.slice(0, argIndex) +
              stateQueryUrl.slice(nextAmpIndex);
          } else {
            stateQueryUrl = stateQueryUrl.slice(0, argIndex);
          }
        }
      }
      // stateQueryUrl += encodedActionQueryUrl;

      // Concatenate or replace the URL with the new arguments

      state.queryUrl.queryString =
        state.queryUrl.queryString + encodedActionQueryUrl;
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

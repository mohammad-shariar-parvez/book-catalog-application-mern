/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image?: string;
  reviews?: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  __v?: number;
  _id: string;
}
interface BookState {
  books?: IBook[];
  status?: string;
}

const initialState: BookState = {
  books: [],
  status: "?",
};
const globalBookSlice = createSlice({
  name: "globalBooks",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { addBooks, setStatus } = globalBookSlice.actions;
export default globalBookSlice.reducer;

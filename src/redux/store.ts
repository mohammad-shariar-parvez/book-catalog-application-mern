import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import wishListSlice from "./features/wishList/wishListSlice";
import futureBooksSlice from "./features/futureBooks/futureBooksSlice";
import globaalBookSlice from "./features/books/bookSlice";
import filterSlice from "./features/filter/filterSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    wishList: wishListSlice,
    futureBooks: futureBooksSlice,
    globalBooks: globaalBookSlice,
    filterCategory: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

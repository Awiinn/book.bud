import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import booksSlice from "../components/booksSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    book: booksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

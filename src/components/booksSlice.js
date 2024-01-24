import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const booksSlice = createSlice({
  name: "book",

  initialState: {
    books: [],
    filteredBooks: [],
    str: "",
  },
  reducers: {
    filterArray: (state, action) => {
      state.filteredBooks = state.books;
      state.filteredBooks = action.payload;
      //   state.filteredBooks.filter(book => book.include(payload.str))
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllBooks.matchFulfilled,
      (state, { payload }) => {
        state.books = payload.books;
        state.filteredBooks = payload.books;
      }
    );
  },
});

export const { filterArray } = booksSlice.actions;
export const selectBook = (state) => state.book.books;
export const filterBook = (state) => state.book.filteredBooks;
export default booksSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  page: 1,
  books: [] as Book[],
  wordList: [] as string[],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      if (typeof action.payload === "undefined") {
        state.query = "";
      }
      state.query = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      if (typeof action.payload !== "number") {
        state.page = 1;
      } else if (Number.isNaN(action.payload)) {
        state.page = 1;
      } else {
        state.page = action.payload;
      }
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setWordList: (state) => {
      const parsedSearchData = state.books.reduce((prev: string[], book) => {
        if (book.author.includes("<b") && !prev.includes(book.author)) {
          return [...prev, book.author];
        }
        if (book.title.includes("<b") && !prev.includes(book.title)) {
          return [...prev, book.title];
        }
        if (book.publisher.includes("<b") && !prev.includes(book.publisher)) {
          return [...prev, book.publisher];
        }
        return [...prev];
      }, []);

      state.wordList = parsedSearchData;
    },
  },
});

const searchSliceActions = searchSlice.actions;
export { searchSliceActions };
export default searchSlice.reducer;

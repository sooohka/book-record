import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
});

const favoriteActions = favoriteSlice.actions;
const favoriteReducer = favoriteSlice.reducer;

export { favoriteActions };
export default favoriteReducer;

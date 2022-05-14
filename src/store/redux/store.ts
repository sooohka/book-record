import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
type RootState = ReturnType<typeof store.getState>;

export type { RootState };
export default store;

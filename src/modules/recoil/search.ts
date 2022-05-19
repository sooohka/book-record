import { atom } from "recoil";

const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});

const searchPageState = atom({
  key: "searchPageState",
  default: 1,
});

export { searchQueryState, searchPageState };

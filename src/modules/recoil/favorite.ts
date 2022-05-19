import { atom } from "recoil";

import { Book } from "types/book";
import { getFavorites, setFavorites } from "util/store";

const favoritesState = atom<Book[]>({
  key: "favoritesState",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newV) => {
        setFavorites(newV);
      });
    },
    ({ setSelf }) => {
      setSelf(getFavorites());
    },
  ],
});

export { favoritesState };

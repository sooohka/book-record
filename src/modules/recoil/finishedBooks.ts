import { atom } from "recoil";

import { Book } from "types/book";
import { getFinishedBooks, setFinishedBooks } from "util/store";

const finishedBooksState = atom<Book[]>({
  key: "finishedBooksState",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newV) => {
        setFinishedBooks(newV);
      });
    },
    ({ setSelf }) => {
      setSelf(getFinishedBooks());
    },
  ],
});

export { finishedBooksState };

import store from "store";

import STORE_KEYS from "modules/store/storeKeys";
import { Book } from "types/book";

const get = (key: string) => () => {
  const books = store.get(key) as Book[];
  return books ?? [];
};

const add = (key: string) => (book: Book) => {
  const favorites = (store.get(key) as Book[]) ?? [];
  favorites.push(book);
  store.set(STORE_KEYS.FAVORITES, favorites);
};

const set = (key: string) => (books: Book[]) => {
  const prev = get(key);
  try {
    store.set(key, books);
  } catch (e) {
    store.set(key, prev);
  }
};

const favorites = {
  getFavorites: get(STORE_KEYS.FAVORITES),
  addFavorites: add(STORE_KEYS.FAVORITES),
  setFavorites: set(STORE_KEYS.FAVORITES),
};

const finishedBooks = {
  getFinishedBooks: get(STORE_KEYS.FINISHED_BOOKS),
  addFinishedBooks: add(STORE_KEYS.FINISHED_BOOKS),
  setFinishedBooks: set(STORE_KEYS.FINISHED_BOOKS),
};

const { addFavorites, getFavorites, setFavorites } = favorites;
const { addFinishedBooks, getFinishedBooks, setFinishedBooks } = finishedBooks;

export {
  addFinishedBooks,
  getFinishedBooks,
  setFinishedBooks,
  addFavorites,
  getFavorites,
  setFavorites,
};

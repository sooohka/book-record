import store from "store";

import STORE_KEYS from "modules/store/storeKeys";
import { Book } from "types/book";

const getFavorites = () => {
  const books = store.get(STORE_KEYS.FAVORITES) as Book[];
  return books ?? [];
};

const getFavoriteById = (book: Book) => {
  let foundBook;

  store.each((v: Book) => {
    if (v.isbn === book.isbn) {
      foundBook = v;
    }
  });
  return foundBook;
};

const addFavorite = (book: Book) => {
  const favorites = (store.get(STORE_KEYS.FAVORITES) as Book[]) ?? [];
  favorites.push(book);
  store.set(STORE_KEYS.FAVORITES, favorites);
};

const setFavorites = (books: Book[]) => {
  const prev = getFavorites;
  try {
    store.set(STORE_KEYS.FAVORITES, books);
  } catch (e) {
    store.set(STORE_KEYS.FAVORITES, prev);
  }
};

export { getFavorites, addFavorite, setFavorites, getFavoriteById };

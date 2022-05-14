import { atom, selector } from "recoil";
import getBooks from "../../api/getBooks";

const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});

const searchPageState = atom({
  key: "searchPageState",
  default: 1,
});

const searchedBookListState = selector({
  key: "searchedBookListState",
  get: async ({ get }) => {
    const query = get(searchQueryState);
    if (query === "") return [];
    const page = get(searchPageState);
    const { data } = await getBooks({ query, start: page });
    return data;
  },
});

const searchedWordListState = selector({
  key: "searchedWordListState",
  get: ({ get }) => {
    const books = get(searchedBookListState);
    const parsedSearchData = books.reduce((prev: string[], book) => {
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
    return parsedSearchData;
  },
});

export {
  searchQueryState,
  searchPageState,
  searchedBookListState,
  searchedWordListState,
};

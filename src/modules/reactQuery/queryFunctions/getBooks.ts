import getBooksAxios from "api/getBooksAxios";
import QUERY_KEYS from "modules/reactQuery/queryKeys";
import { QueryFunction } from "react-query";

type GetBookQueryKey = [
  typeof QUERY_KEYS.SEARCH,
  { query: string; start: number }
];
type GetBookReturnType = {
  books: Book[];
  wordList: string[];
};
type GetBook = QueryFunction<GetBookReturnType, GetBookQueryKey>;
const getBooks: GetBook = async (context) => {
  const { queryKey } = context;
  const [, { query, start }] = queryKey;
  if (query === "") {
    return { books: [], wordList: [] };
  }

  const res = await getBooksAxios(query, start);
  const books: Book[] = res.data.map((book) => ({
    ...book,
    meta: { isBookMarked: false, isFavorite: false },
  }));

  const wordList = res.data.reduce((prev: string[], book) => {
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
  return { books, wordList };
};

export default getBooks;

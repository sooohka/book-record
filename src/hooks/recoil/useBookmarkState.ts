import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { finishedBooksState } from "modules/recoil/finishedBooks";
import { Book } from "types/book";

function useFinishedBookState() {
  const [finishedBooks, setFinishedBooks] = useRecoilState(finishedBooksState);

  const deleteFinishedBooks = useCallback(
    (book: Book) => {
      setFinishedBooks((prev) => prev.filter((v) => v.isbn !== book.isbn));
    },
    [setFinishedBooks]
  );

  const addFinishedBooks = useCallback(
    (book: Book) => {
      setFinishedBooks((prev) => [...prev, book]);
    },
    [setFinishedBooks]
  );

  const getFinishedBooksById = useCallback(
    (id: string) => finishedBooks.find((v) => v.isbn === id),
    [finishedBooks]
  );

  return {
    favorites: finishedBooks,
    addFinishedBooks,
    deleteFinishedBooks,
    getFinishedBooksById,
  };
}
export default useFinishedBookState;

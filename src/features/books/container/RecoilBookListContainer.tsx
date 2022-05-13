import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import BookList from "../../../components/BookList";
import { searchedBookListState } from "../../../store/search";
import { BookListContextProvider } from "../context/BookListContext";

function RecoilBookListContainer() {
  const searchedBookList = useRecoilValue(searchedBookListState);

  const value = useMemo(
    () => ({
      books: searchedBookList,
    }),
    [searchedBookList]
  );
  return (
    <BookListContextProvider value={value}>
      <BookList />
    </BookListContextProvider>
  );
}

export default RecoilBookListContainer;

import React, { useContext } from "react";
import SearchResultContext from "../../features/search/context/SearchResultContext";
import BookListItem from "./BookListItem";
import S from "./Style";

function BookList() {
  const { books } = useContext(SearchResultContext);
  return (
    <S.Container>
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </S.Container>
  );
}

export default BookList;

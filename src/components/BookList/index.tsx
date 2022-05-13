import React, { useContext } from "react";
import BookListItem from "./BookListItem";
import BookListContext from "../../features/books/context/BookListContext";
import S from "./Style";

function BookList() {
  const { books } = useContext(BookListContext);
  return (
    <S.Container>
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </S.Container>
  );
}

export default BookList;

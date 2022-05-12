import React, { useContext } from "react";
import BookListItem from "../BookListItem";
import Context from "../context";
import S from "./Style";

function BookList() {
  const { books } = useContext(Context);
  return (
    <S.Container>
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </S.Container>
  );
}

export default BookList;

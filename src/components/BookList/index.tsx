import getBooks from "modules/reactQuery/queryFunctions/getBooks";
import QUERY_KEYS from "modules/reactQuery/queryKeys";
import { searchPageState, searchQueryState } from "modules/recoil/search";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import BookListItem from "./BookListItem";
import S from "./Style";

function BookList() {
  const query = useRecoilValue(searchQueryState);
  const page = useRecoilValue(searchPageState);

  const queryResult = useQuery(
    [QUERY_KEYS.SEARCH, { start: page, query }],
    getBooks,
    {}
  );

  return (
    <S.Container>
      {/* //FIXME: fix ? */}
      {queryResult.data?.books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </S.Container>
  );
}

export default BookList;

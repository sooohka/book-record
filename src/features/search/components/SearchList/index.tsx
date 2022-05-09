import React from "react";
import SearchListItem from "./SearchListItem";
import S from "./Style";

function SearchList() {
  return (
    <S.Container>
      <SearchListItem />
      <SearchListItem />
    </S.Container>
  );
}

export default SearchList;

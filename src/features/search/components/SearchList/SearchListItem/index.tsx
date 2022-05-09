import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import S from "./Style";

function SearchListItem() {
  // TODO:ListItem click시 검색어로 올라가고 바로 검색되도록 구현

  return (
    <S.Container>
      <SearchIcon width="2.5rem" height="2.5rem" />
      <S.Text>
        harry potter audio book harry potter audio book harry potter audio book
        harry potter audio book
      </S.Text>
    </S.Container>
  );
}

export default SearchListItem;

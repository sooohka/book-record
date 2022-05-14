import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import SearchListItem from "./SearchListItem";
import S from "./Style";

function SearchList() {
  const { searchedWordList } = useContext(SearchContext);

  return (
    <S.Container>
      {searchedWordList.map((result, i) => (
        <SearchListItem key={`${i.toFixed()}`} result={result} />
      ))}
    </S.Container>
  );
}

export default SearchList;

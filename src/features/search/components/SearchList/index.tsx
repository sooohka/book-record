import React from "react";
import { useRecoilValue } from "recoil";
import { searchedWordListState } from "../../../../store/search";
import SearchListItem from "./SearchListItem";
import S from "./Style";

function SearchList() {
  // const { searchedBookList } = useContext(SearchContext);
  const searchedWordList = useRecoilValue(searchedWordListState);
  return (
    <S.Container>
      {searchedWordList.map((result, i) => (
        <SearchListItem key={`${i.toFixed()}`} result={result} />
      ))}
    </S.Container>
  );
}

export default SearchList;

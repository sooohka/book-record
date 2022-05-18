import getBooks from "api/getBooks";
import SearchListItem from "features/search/components/SearchList/SearchListItem";
import S from "features/search/components/SearchList/Style";
import QUERY_KEYS from "modules/reactQuery/queryKeys";
import { searchPageState, searchQueryState } from "modules/store/recoil/search";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

function SearchList() {
  const query = useRecoilValue(searchQueryState);
  const page = useRecoilValue(searchPageState);
  const queryResult = useQuery(
    [QUERY_KEYS.SEARCH, { start: page, query }],
    getBooks
  );
  if (queryResult.isLoading || queryResult.isIdle) {
    return <span>Loading...</span>;
  }

  if (queryResult.isError) {
    return <span>Error: 에러</span>;
  }
  return (
    <S.Container>
      {queryResult.data.wordList.map((result, i) => (
        <SearchListItem key={`${i.toFixed()}`} result={result} />
      ))}
    </S.Container>
  );
}

export default SearchList;

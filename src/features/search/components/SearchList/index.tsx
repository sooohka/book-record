import SearchListItem from "features/search/components/SearchList/SearchListItem";
import S from "features/search/components/SearchList/Style";
import getBooks from "modules/reactQuery/queryFunctions/getBooks";
import QUERY_KEYS from "modules/reactQuery/queryKeys";
import { searchPageState, searchQueryState } from "modules/recoil/search";
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
    return <p>Loading...</p>;
  }

  if (queryResult.isError) {
    // TODO: 에러처리
    return <p>Error: 에러</p>;
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

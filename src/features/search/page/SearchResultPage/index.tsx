import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import BookList from "components/BookList";
import AppWrapper from "components/Layout/AppContainer";
import Spinner from "components/Spinner";
import getBooks from "modules/reactQuery/queryFunctions/getBooks";
import QUERY_KEYS from "modules/reactQuery/queryKeys";
import { searchPageState, searchQueryState } from "modules/recoil/search";
import Title from "components/Title";

function SearchResultPage() {
  const [params, setParams] = useSearchParams();
  const query = useRecoilValue(searchQueryState);
  const setQuery = useSetRecoilState(searchQueryState);
  const page = useRecoilValue(searchPageState);

  useEffect(() => {
    const currentParam = params.get("query");
    if (currentParam) {
      setQuery(currentParam);
    } else {
      setParams({ query });
    }
  }, [params, query, setParams, setQuery]);

  const queryResult = useQuery(
    [QUERY_KEYS.SEARCH, { start: page, query }],
    getBooks,
    {}
  );

  if (queryResult.isLoading) {
    return (
      <AppWrapper>
        <Spinner />
      </AppWrapper>
    );
  }

  if (queryResult.isIdle) {
    return (
      <AppWrapper>
        <BookList books={[]} />
      </AppWrapper>
    );
  }

  if (queryResult.isError) {
    return null;
  }

  if (queryResult.data.books.length === 0) {
    return (
      <AppWrapper>
        <Title>{`${query} 검색결과가 없어요😭`}</Title>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <Title>{`${query} 검색결과`}</Title>
      <BookList books={queryResult.data.books} />
    </AppWrapper>
  );
}

export default SearchResultPage;

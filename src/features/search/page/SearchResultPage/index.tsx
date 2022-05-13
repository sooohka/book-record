import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import AppContainer from "../../../../components/Layout/AppContainer";
import Spinner from "../../../../components/Spinner";
import { searchPageState, searchQueryState } from "../../../../store/search";
import getQueryParam from "../../../../util/getQueryParm";
import RecoilBookListContainer from "../../../books/container/RecoilBookListContainer";

function SearchResultPage() {
  const { search } = useLocation();
  const setQuery = useSetRecoilState(searchQueryState);
  const setPage = useSetRecoilState(searchPageState);

  useEffect(() => {
    // FIXME: 제대로 고치기
    const query = getQueryParam(search, "query");
    const page = getQueryParam(search, "page");

    setQuery(query);
    setPage(Number(page) || 1);
  }, [search, setPage, setQuery]);

  return (
    <AppContainer>
      <Suspense fallback={<Spinner />}>
        <RecoilBookListContainer />
      </Suspense>
    </AppContainer>
  );
}

export default SearchResultPage;

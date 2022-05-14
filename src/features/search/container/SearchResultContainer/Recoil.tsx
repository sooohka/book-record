import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import {
  searchedBookListState,
  searchPageState,
  searchQueryState,
} from "../../../../store/recoil/search";
import getQueryParam from "../../../../util/getQueryParm";
import { SearchResultContextProvider } from "../../context/SearchResultContext";

type Props = {
  children: ReactNode;
};

function RecoilSearchResultContainer({ children }: Props) {
  const setQuery = useSetRecoilState(searchQueryState);
  const setPage = useSetRecoilState(searchPageState);
  const books = useRecoilValueLoadable(searchedBookListState);

  const { search } = useLocation();

  useEffect(() => {
    // FIXME: 제대로 고치기
    const query = getQueryParam(search, "query") || "";
    const page = Number(getQueryParam(search, "page")) || 1;

    setQuery(query);
    setPage(Number(page));
  }, [search, setPage, setQuery]);

  return (
    <SearchResultContextProvider
      books={books.state !== "hasValue" ? [] : books.contents}
    >
      {children}
    </SearchResultContextProvider>
  );
}

export default RecoilSearchResultContainer;

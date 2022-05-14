import React, { ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import getBooks from "../../../../api/getBooks";
import { searchSliceActions } from "../../../../store/redux/searchSlice";
import { RootState } from "../../../../store/redux/store";
import getQueryParam from "../../../../util/getQueryParm";
import { SearchResultContextProvider } from "../../context/SearchResultContext";

type Props = {
  children: ReactNode;
};

function ReduxSearchResultContainer({ children }: Props) {
  const books = useSelector((state: RootState) => state.search.books);
  const dispatch = useDispatch();

  const setQuery = useCallback(
    (query: string) => {
      dispatch(searchSliceActions.setQuery(query));
    },
    [dispatch]
  );
  const setPage = useCallback(
    (page: number) => {
      dispatch(searchSliceActions.setPage(page));
    },
    [dispatch]
  );
  const { search } = useLocation();

  const fetchBooks = useCallback(
    async (query: string, page?: number) => {
      if (query === "") {
        dispatch(searchSliceActions.setBooks([]));
        dispatch(searchSliceActions.setWordList());
        return;
      }
      const { data } = await getBooks({ query, start: page });
      dispatch(searchSliceActions.setBooks(data));
      dispatch(searchSliceActions.setWordList());
    },
    [dispatch]
  );

  useEffect(() => {
    // FIXME: 제대로 고치기
    const query = getQueryParam(search, "query") || "";
    const page = Number(getQueryParam(search, "page")) || 1;

    fetchBooks(query, page);
    setQuery(query);
  }, [fetchBooks, search, setPage, setQuery]);

  return (
    <SearchResultContextProvider books={books}>
      {children}
    </SearchResultContextProvider>
  );
}

export default ReduxSearchResultContainer;

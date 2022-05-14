import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getBooks from "../../../../api/getBooks";
import useDebounce from "../../../../hooks/useDebounce";
import { searchSliceActions } from "../../../../store/redux/searchSlice";
import { RootState } from "../../../../store/redux/store";
import { SearchContextProvider } from "../../context/SearchContext";

type Props = {
  children: ReactNode;
};

function ReduxSearchContainer({ children }: Props) {
  const query = useSelector((state: RootState) => state.search.query);
  const page = useSelector((state: RootState) => state.search.page);
  const wordList = useSelector((state: RootState) => state.search.wordList);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchBooks = useCallback(async () => {
    if (query === "") {
      dispatch(searchSliceActions.setBooks([]));
      dispatch(searchSliceActions.setWordList());
      return;
    }
    const { data } = await getBooks({ query, start: page });
    dispatch(searchSliceActions.setBooks(data));
    dispatch(searchSliceActions.setWordList());
  }, [dispatch, page, query]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const clearInput = useCallback(() => {
    dispatch(searchSliceActions.setQuery(""));
  }, [dispatch]);

  const setQuery = useCallback(
    (_query: string) => {
      dispatch(searchSliceActions.setQuery(_query));
    },
    [dispatch]
  );

  const handleQueryChange = useCallback(() => {
    dispatch(searchSliceActions.setQuery(input));
  }, [dispatch, input]);

  const searchBookList = useCallback(
    (_query: string) => {
      navigate(`/search/results?query=${_query}`);
    },
    [navigate]
  );

  useDebounce(handleQueryChange);

  return (
    <SearchContextProvider
      input={input}
      query={query}
      searchBookList={searchBookList}
      setInput={setInput}
      setQuery={setQuery}
      clearInput={clearInput}
      searchedWordList={wordList}
    >
      {children}
    </SearchContextProvider>
  );
}

export default ReduxSearchContainer;

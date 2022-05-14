import React, { ReactNode, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import useDebounce from "../../../../hooks/useDebounce";
import {
  searchedWordListState,
  searchQueryState,
} from "../../../../store/recoil/search";
import { SearchContextProvider } from "../../context/SearchContext";

type Props = {
  children: ReactNode;
};

function RecoilSearchContainer({ children }: Props) {
  const query = useRecoilValue(searchQueryState);
  const setQuery = useSetRecoilState(searchQueryState);
  const wordList = useRecoilValueLoadable(searchedWordListState);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const clearInput = useCallback(() => {
    setInput("");
  }, [setInput]);

  const handleQueryChange = useCallback(() => {
    setQuery(input);
  }, [input, setQuery]);

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
      searchedWordList={wordList.state !== "hasValue" ? [] : wordList.contents}
      setInput={setInput}
      setQuery={setQuery}
      clearInput={clearInput}
    >
      {children}
    </SearchContextProvider>
  );
}

export default RecoilSearchContainer;

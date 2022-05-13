import React, { ReactNode, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useDebounce from "../../../hooks/useDebounce";
import { searchQueryState } from "../../../store/search";
import { SearchContextProvider } from "../context/SearchContext";

type Props = {
  children: ReactNode;
};

function RecoilSearchContainer({ children }: Props) {
  const query = useRecoilValue(searchQueryState);
  const setQuery = useSetRecoilState(searchQueryState);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const clearInput = useCallback(() => {
    setInput("");
  }, [setInput]);

  const handleQueryChange = useCallback(() => {
    setQuery(input);
  }, [input, setQuery]);

  useDebounce(handleQueryChange);

  const searchBookList = useCallback(
    (_query: string) => {
      navigate(`/search/results?query=${_query}`);
    },
    [navigate]
  );

  return (
    <SearchContextProvider
      input={input}
      query={query}
      searchBookList={searchBookList}
      setInput={setInput}
      setQuery={setQuery}
      clearInput={clearInput}
    >
      {children}
    </SearchContextProvider>
  );
}

export default RecoilSearchContainer;

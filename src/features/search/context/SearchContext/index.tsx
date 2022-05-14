import React, { createContext, ReactNode } from "react";
import { SetterOrUpdater } from "recoil";

type SearchContextType = {
  query: string;
  input: string;
  searchBookList: (_query: string) => void;
  clearInput: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setQuery: SetterOrUpdater<string> | ((query: string) => void);
  searchedWordList: string[];
};

const initialValue: SearchContextType = {
  query: "",
  input: "",
  searchBookList: () => {},
  clearInput: () => {},
  setInput: () => {},
  setQuery: () => {},
  searchedWordList: [],
};

const SearchContext = createContext<SearchContextType>(initialValue);

type Props = {
  children: ReactNode;
} & SearchContextType;

function SearchContextProvider(props: Props) {
  const { children, ...rest } = props;
  return (
    <SearchContext.Provider value={rest}>{children}</SearchContext.Provider>
  );
}

export type { SearchContextType };
export { SearchContextProvider };
export default SearchContext;

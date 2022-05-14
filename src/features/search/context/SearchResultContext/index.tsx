import React, { createContext, ReactNode } from "react";

type SearchResultContextType = {
  books: Book[];
};

const initialValue: SearchResultContextType = {
  books: [],
};

const SearchResultContext =
  createContext<SearchResultContextType>(initialValue);

type Props = {
  children: ReactNode;
} & SearchResultContextType;

function SearchResultContextProvider(props: Props) {
  const { children, ...rest } = props;
  return (
    <SearchResultContext.Provider value={rest}>
      {children}
    </SearchResultContext.Provider>
  );
}

export type { SearchResultContextType };
export { SearchResultContextProvider };

export default SearchResultContext;

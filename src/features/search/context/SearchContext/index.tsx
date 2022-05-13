import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { SetterOrUpdater } from "recoil";
import useDebounce from "../../../../hooks/useDebounce";
import useMount from "../../../../hooks/useMount";

type SearchContextType = {
  query: string;
  input: string;
  searchBookList: (_query: string) => void;
  clearInput: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setQuery: SetterOrUpdater<string>;
};

const initialValue: SearchContextType = {
  query: "",
  input: "",
  searchBookList: () => {},
  clearInput: () => {},
  setInput: () => {},
  setQuery: () => {},
};

const SearchContext = createContext<SearchContextType>(initialValue);

type Props = {
  children: ReactNode;
} & SearchContextType;

function SearchContextProvider(props: Props) {
  const { children, input, setQuery, query, setInput, ...rest } = props;

  const handleQueryChange = useCallback(() => {
    setQuery(input);
  }, [input, setQuery]);

  useDebounce(handleQueryChange);

  const isMount = useMount();

  const value: SearchContextType = useMemo(
    () => ({
      input,
      setQuery,
      query,
      setInput,
      ...rest,
    }),
    [input, query, rest, setInput, setQuery]
  );

  useEffect(() => {
    if (isMount) {
      if (query) {
        setInput(decodeURI(query));
      }
    }
  }, [isMount, query, setInput]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export type { SearchContextType };
export { SearchContextProvider };
export default SearchContext;

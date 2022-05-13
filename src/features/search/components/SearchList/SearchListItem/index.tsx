import { SearchIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import SearchContext from "../../../context/SearchContext";
import S from "./Style";

type Props = {
  result: string;
};

function SearchListItem({ result }: Props) {
  const { setQuery, searchBookList } = useContext(SearchContext);

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (e.currentTarget.textContent) {
      setQuery(e.currentTarget.textContent);
      searchBookList(e.currentTarget.textContent);
    }
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      if (e.currentTarget.textContent) {
        setQuery(e.currentTarget.textContent);
        searchBookList(e.currentTarget.textContent);
      }
    }
  };

  return (
    <S.Container onKeyUp={handleKeyUp} onClick={handleClick} tabIndex={0}>
      <SearchIcon width="2.5rem" height="2.5rem" />
      <S.Text dangerouslySetInnerHTML={{ __html: result }} />
    </S.Container>
  );
}

export default SearchListItem;

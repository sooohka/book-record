import React, { useContext } from "react";
import Button from "../../../../components/Button";
import SearchContext from "../../context/SearchContext";
import SearchInput from "./SearchInput";
import S from "./Style";

function SearchForm() {
  const { searchBookList, input } = useContext(SearchContext);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    searchBookList(input);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <SearchInput />
      <Button aria-label="search" type="submit" variant="outlined">
        검색
      </Button>
    </S.Form>
  );
}

export default SearchForm;

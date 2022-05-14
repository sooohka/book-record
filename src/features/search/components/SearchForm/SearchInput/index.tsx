import React, { useContext, useEffect, useRef } from "react";
import SearchContext from "../../../context/SearchContext";
import S from "./Style";
import XCircleButton from "./XCircleButton";

function SearchInput() {
  const { clearInput, setInput, input } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <S.Container>
      <S.Input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        placeholder="검색"
      />
      <XCircleButton
        aria-label="reset input text"
        type="reset"
        onClick={clearInput}
        hidden={input === ""}
      />
    </S.Container>
  );
}

export default SearchInput;

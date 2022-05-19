import useDebounce from "hooks/useDebounce";
import { searchQueryState } from "modules/recoil/search";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import S from "./Style";
import XCircleButton from "./XCircleButton";

function SearchInput() {
  const [input, setInput] = useState("");
  const setQuery = useSetRecoilState(searchQueryState);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setInput("");
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value);
  };

  const debounceCallback = useCallback(() => {
    setQuery(input);
  }, [input, setQuery]);

  useDebounce(debounceCallback);

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

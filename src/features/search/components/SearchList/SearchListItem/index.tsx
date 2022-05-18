import { SearchIcon } from "@heroicons/react/outline";
import { searchQueryState } from "modules/store/recoil/search";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import S from "./Style";

type Props = {
  result: string;
};

function SearchListItem({ result }: Props) {
  const [query, setQuery] = useRecoilState(searchQueryState);
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    // TODO: textContent 위험함
    if (e.currentTarget.textContent) {
      setQuery(e.currentTarget.textContent);
      navigate(`/search/results?query=${query}`);
    }
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      if (e.currentTarget.textContent) {
        setQuery(e.currentTarget.textContent);
        navigate(`/search/results?query=${query}`);
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

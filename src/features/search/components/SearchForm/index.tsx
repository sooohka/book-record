import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import SearchInput from "features/search/components/SearchForm/SearchInput";
import S from "features/search/components/SearchForm/Style";

function SearchForm() {
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    // query값 바뀌기를 기다려줘야하기 때문에 setTimeout 적용
    setTimeout(() => {
      navigate(`/search/results`);
    }, 300);
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
